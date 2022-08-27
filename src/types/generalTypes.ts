export type OptionsLOVType = {
  id: string;
  name: string;
};

export type GenericApiResponse<Result> = {
  result?: Result;
  error?: ErrorObject;
  status: string;
};

type ErrorObject = {
  code: number;
  details: string[];
};

export type ExchangeData = {
  id: string;
  name: string;
  code: string;
  conf: ExchangeConfig;
  isActive: boolean;
  by_oauth: boolean;
  is_active_by_oauth: boolean;
  by_api: boolean;
  by_import: boolean;
  is_active_by_api: boolean;
  is_active_by_import: boolean;
  is_transactable: boolean;
  file_upload_config?: string[];
};

type ExchangeConfig = {
  api_key?: string;
  api_secret?: string;
};

export type UploadFilePayload = {
  url: string;
  payload: File;
  contentType: string;
};

export type GenericFileType = {
  code: string;
  name: string;
  id: string;
};
