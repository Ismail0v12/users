export interface UserInterface {
  readonly id: number;
  readonly first_name: string;
  readonly last_name: string;
  readonly avatar?: string;
  readonly color?: string;
  readonly year?: number;
  readonly name?: string;
  readonly pantone_value?: string;
  readonly email: string;
}