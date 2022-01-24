export interface IFeatures {
  id: string | number;
  properties: IProperties;
  type: string;
  geometry: IGeometry;
}

export interface IGeometry {
  type: string;
  coordinates: any[];
}

export interface IProperties {
  [key: string]: any;
}

export interface IDataState {
  type: string;
  features: IFeatures[];
}

export interface ICoreState {
  data: IDataState;
  customData: IDataState;
}

export interface AppState {
  core: ICoreState;
};
