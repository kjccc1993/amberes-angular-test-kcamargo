import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];
  types: any = {
    error: 'bg-danger text-light',
    success: 'bg-success text-light',
    info: 'bg-info text-light',
    warning: 'bg-warning text-light',
  };

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    options.classname = this.types[options.type];
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}
