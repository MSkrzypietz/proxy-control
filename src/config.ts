import * as process from 'process';

const config = {
  port: process.env.PORT || 3000,
  targetAddress: process.env.TARGET_ADDRESS,
  controlsAddress: process.env.CONTROLS_ADDRESS
};

export default config;
