/// <reference types="react" />

declare namespace JSX {
  interface IntrinsicElements {
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
    label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
  }
}

declare module "@/components/ui/button" {
  export const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

declare module "@/components/ui/card" {
  export const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement>>;
  export const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement>>;
  export const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement>>;
  export const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement>>;
}

declare module "@/components/ui/form" {
  export const Form: React.FC<any>;
  export const FormControl: React.FC<any>;
  export const FormField: React.FC<any>;
  export const FormItem: React.FC<any>;
  export const FormLabel: React.FC<any>;
  export const FormMessage: React.FC<any>;
}

declare module "@/components/ui/input" {
  export const Input: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement>>;
}
