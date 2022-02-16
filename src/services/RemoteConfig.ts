import remoteConfig from '@react-native-firebase/remote-config';

interface IRemoteConfig {
  COMPANY_NAME: string;
}
type RemoteConfigKey = keyof IRemoteConfig;

export class RemoteConfig {
  private static instance: RemoteConfig;
  private remoteConfigRef!: ReturnType<typeof remoteConfig>;
  private defaultConfig = {
    COMPANY_NAME: 'noname',
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
    await this.remoteConfigRef.setDefaults(this.defaultConfig);
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
