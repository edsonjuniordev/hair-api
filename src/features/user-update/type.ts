import { Address } from "../../domain/user";

export type UserUpdate = {
  id?: string;
  name?: string;
  phone?: string;
  photo?: string | undefined;
  address?: Address;
};