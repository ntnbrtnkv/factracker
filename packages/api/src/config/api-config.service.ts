import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { commonConfig } from '.';

@Injectable()
export class APIConfigService {
  constructor(
    @Inject(commonConfig.KEY)
    private readonly commonConf: ConfigType<typeof commonConfig>,
  ) {}

  get(key: keyof ConfigType<typeof commonConfig>) {
    return this.commonConf[key];
  }

  isProduction() {
    return this.commonConf.node_env === 'production';
  }
}
