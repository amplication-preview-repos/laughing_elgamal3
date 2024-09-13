import { QrCode as TQrCode } from "../api/qrCode/QrCode";

export const QRCODE_TITLE_FIELD = "value";

export const QrCodeTitle = (record: TQrCode): string => {
  return record.value?.toString() || String(record.id);
};
