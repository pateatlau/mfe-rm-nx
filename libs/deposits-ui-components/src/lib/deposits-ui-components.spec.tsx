import { render } from '@testing-library/react';

import DepositsUiComponents from './deposits-ui-components';

describe('DepositsUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DepositsUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
