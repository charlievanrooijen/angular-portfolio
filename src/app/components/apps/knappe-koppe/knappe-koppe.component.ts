import { Component, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-knappe-koppen',
  templateUrl: './knappe-koppe.component.html',
  styleUrls: ['./knappe-koppe.component.scss']
})
export class KnappeKoppenComponent {

  globalData: any[] = [];

  @ViewChild('excelFile', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('variableList') variableList!: ElementRef;
  @ViewChild('template') templateInput!: ElementRef;
  @ViewChild('mailtoLink') mailtoContainer!: ElementRef;  
  @ViewChild('subjectInput') subjectInput!: ElementRef;

  handleFile(): void {
    
    if (!this.fileInput || !this.fileInput.nativeElement.files) {
      console.error("File input is not ready yet.");
      return;
  }
    const file = this.fileInput.nativeElement.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type: 'array'});
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet);

      if (excelData && Array.isArray(excelData) && excelData.length > 0 && typeof excelData[0] === 'object') {
        const headers = Object.keys(excelData[0] as object);
        this.loadVariables(headers);
        this.globalData = excelData;
      }
    };

    reader.readAsArrayBuffer(file);
  }

  loadVariables(headers: string[]): void {
    this.variableList.nativeElement.innerHTML = '';
    headers.forEach(header => {
      const li = document.createElement('li');
      li.textContent = header;
      this.variableList.nativeElement.appendChild(li);
    });
  }

  generateMailto(): void {
    if (this.globalData.length === 0) {
      alert('No data loaded from Excel. Please upload a valid Excel file.');
      return;
    }
  
    const subjectTemplate = this.subjectInput.nativeElement.value;
    const bodyTemplate = this.templateInput.nativeElement.value;
    this.mailtoContainer.nativeElement.innerHTML = '';
    let errorMessages: string[] = [];
  
    this.globalData.forEach((rowData, index) => {
      if (!rowData["Recipient"] && index > 0) {
        errorMessages.push(`Row ${index + 1}: Missing 'Recipient'.`);
        return;
      }
  
      if (!rowData["RecipientName"] && index > 0) {
        errorMessages.push(`Row ${index + 1}: Missing 'RecipientName'.`);
        return;
      }
  
      let finalSubject = subjectTemplate;
      let finalBody = bodyTemplate;
  
      const subjectVariables = subjectTemplate.match(/{\w+}/g) || [];
      subjectVariables.forEach((variable: string) => {
        const strippedVar = variable.replace(/{|}/g, "");
        if (rowData[strippedVar] !== undefined) {
          finalSubject = finalSubject.replace(new RegExp(variable, 'g'), rowData[strippedVar]);
        } else {
          errorMessages.push(`Row ${index + 1}: Variable '${variable}' is missing in data.`);
        }
      });

      const bodyVariables = bodyTemplate.match(/{\w+}/g) || [];
      bodyVariables.forEach((variable: string) => {
        const strippedVar = variable.replace(/{|}/g, "");
        if (rowData[strippedVar] !== undefined) {
          finalBody = finalBody.replace(new RegExp(variable, 'g'), rowData[strippedVar]);
        } else {
          errorMessages.push(`Row ${index + 1}: Variable '${variable}' is missing in data.`);
        }
      });
  
      const mailtoLink = `mailto:${encodeURIComponent(rowData["Recipient"])}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(finalBody)}`;
      const linkElement = document.createElement('a');
      linkElement.href = mailtoLink;
      linkElement.classList.add("btn", "btn-success", "mt-1");
      linkElement.innerText = `Send to ${rowData["Recipient"]}`;
      this.mailtoContainer.nativeElement.appendChild(linkElement);
  
      // Add a line break after each link
      const breakElement = document.createElement('br');
      this.mailtoContainer.nativeElement.appendChild(breakElement);
    });
  
    if (errorMessages.length > 0) {
      alert(`Errors:\n\n${errorMessages.join('\n')}`);
    }
  }  
}
