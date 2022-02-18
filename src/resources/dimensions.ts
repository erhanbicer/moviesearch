import { Dimensions } from 'react-native';
import { getHeight, getWidth } from '@utils/responsiveUtil';

const { width, height } = Dimensions.get('window');

export interface IDimensions {
  width: number;
  height: number;
  /**
   * @dimension 2
   */
  xxs_h: number;
  /**
   * @dimension 4
   */
  xs_h: number;
  /**
   * @dimension 8
   */
  s_h: number;
  /**
   * @dimension 12
   */
  m_h: number;
  /**
   * @dimension 16
   */
  l_h: number;
  /**
   * @dimension 24
   */
  xl_h: number;
  /**
   * @dimension 36
   */
  xxl_h: number;
  /**
   * @dimension 2
   */
  xxs_w: number;
  /**
   * @dimension 4
   */
  xs_w: number;
  /**
   * @dimension 8
   */
  s_w: number;
  /**
   * @dimension 12
   */
  m_w: number;
  /**
   * @dimension 16
   */
  l_w: number;
  /**
   * @dimension 24
   */
  xl_w: number;
  /**
   * @dimension 36
   */
  xxl_w: number;
}

interface ITextStyles {
  /**
   * @dimension 28
   */
  h1: number;
  /**
   * @dimension 24
   */
  h2: number;
  /**
   * @dimension 18
   */
  h3: number;
  /**
   * @dimension 16
   */
  h4: number;
  /**
   * @dimension 14
   */
  h5: number;
  /**
   * @dimension 12
   */
  h6: number;
}

const xxsmall = 2;
const xsmall = xxsmall * 2; // 4
const small = xxsmall * 4; // 8
const medium = xxsmall * 6; // 12
const large = xxsmall * 8; // 16
const xLarge = xxsmall * 12; // 24
const xxLarge = xxsmall * 18; // 36

const fontSize: ITextStyles = {
  h1: xLarge + 4,
  h2: xLarge,
  h3: large + 2,
  h4: large,
  h5: medium + 2,
  h6: medium,
};

const dimensions: IDimensions = {
  width: Math.floor(width),
  height: Math.floor(height),
  xxs_h: getHeight(xxsmall),
  xs_h: getHeight(xsmall),
  s_h: getHeight(small),
  m_h: getHeight(medium),
  l_h: getHeight(large),
  xl_h: getHeight(xLarge),
  xxl_h: getHeight(xxLarge),
  xxs_w: getWidth(xxsmall),
  xs_w: getWidth(xsmall),
  s_w: getWidth(small),
  m_w: getWidth(medium),
  l_w: getWidth(large),
  xl_w: getWidth(xLarge),
  xxl_w: getWidth(xxLarge),
};

export { fontSize, dimensions };
