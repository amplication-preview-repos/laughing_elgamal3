import { SortOrder } from "../../util/SortOrder";

export type QrCodeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  scanCount?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
