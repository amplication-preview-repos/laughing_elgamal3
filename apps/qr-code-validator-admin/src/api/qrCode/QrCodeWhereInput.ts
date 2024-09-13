import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QrCodeWhereInput = {
  id?: StringFilter;
  scanCount?: IntNullableFilter;
  value?: StringNullableFilter;
};
