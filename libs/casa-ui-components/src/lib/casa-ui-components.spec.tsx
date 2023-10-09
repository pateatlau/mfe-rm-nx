import { render } from '@testing-library/react';

import CasaUiComponents from './casa-ui-components';

describe('CasaUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CasaUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
