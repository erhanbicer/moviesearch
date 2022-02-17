import remoteConfig, {
  FirebaseRemoteConfigTypes,
} from '@react-native-firebase/remote-config';

interface IRemoteConfig {
  COMPANY_NAME: string;
  BASE_URL: string;
  OMDB_API_KEY: string;
}
type RemoteConfigKey = keyof IRemoteConfig;

export class RemoteConfig {
  private static instance: RemoteConfig;
  private remoteConfigRef!: ReturnType<typeof remoteConfig>;
  private defaultConfig: IRemoteConfig = {
    COMPANY_NAME: 'noname',
    BASE_URL: '',
    OMDB_API_KEY: '',
  };

  private constructor() {}

  static getInstance() {
    if (!RemoteConfig.instance) {
      RemoteConfig.instance = new RemoteConfig();
    }

    return RemoteConfig.instance;
  }

  static async initialize() {
    const instance = RemoteConfig.getInstance();
    await instance.initialize();
    return instance;
  }

  private async initialize() {
    this.remoteConfigRef = remoteConfig();
    await this.remoteConfigRef.setDefaults(
      this.defaultConfig as unknown as FirebaseRemoteConfigTypes.ConfigDefaults,
    );
    await this.remoteConfigRef.fetchAndActivate();
  }

  public getStringValue(key: RemoteConfigKey) {
    return this.remoteConfigRef.getValue(key).asString();
  }

  public getBoolValue(key: RemoteConfigKey) {
    return this.remoteConfigRef.getValue(key).asBoolean();
  }

  public getNumberValue(key: RemoteConfigKey) {
    return this.remoteConfigRef.getValue(key).asNumber();
  }
}
