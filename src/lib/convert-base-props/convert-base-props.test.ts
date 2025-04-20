import { convertBaseProps } from '.';
import { describe, it, expect } from 'vitest';
import { BaseStylesProps } from '../types';

describe('convertBaseProps', () => {
  it('должен конвертировать отступы', () => {
    const props: Partial<BaseStylesProps> = {
      p: '16',
      mt: '8',
      mx: '4',
    };

    const result = convertBaseProps(props);
    expect(result).toBe('p-space-16 mt-space-8 mx-space-4');
  });

  it('должен конвертировать выравнивание текста', () => {
    const props: Partial<BaseStylesProps> = {
      textAlign: 'center',
    };

    const result = convertBaseProps(props);
    expect(result).toBe('text-center');
  });

  it('должен конвертировать комбинацию свойств', () => {
    const props: Partial<BaseStylesProps> = {
      p: '4',
      mb: '8',
      textAlign: 'right',
    };

    const result = convertBaseProps(props);
    expect(result).toBe('p-space-4 mb-space-8 text-right');
  });

  it('должен возвращать пустую строку для пустых пропсов', () => {
    const props: Partial<BaseStylesProps> = {};

    const result = convertBaseProps(props);
    expect(result).toBe('');
  });
});
