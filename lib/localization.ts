// Format currency in Egyptian Pounds (EGP)
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: 'EGP',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }).format(amount);
}

// Format date in Egyptian format
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Format time in Egyptian format (12-hour)
export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('ar-EG', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
}

// Format date and time together
export function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
}

// Convert numbers to Arabic numerals
export function toArabicNumerals(num: number): string {
  return num.toLocaleString('ar-EG');
}

// Format percentage in Arabic
export function formatPercentage(value: number): string {
  return new Intl.NumberFormat('ar-EG', {
    style: 'percent',
    maximumFractionDigits: 2
  }).format(value / 100);
}
