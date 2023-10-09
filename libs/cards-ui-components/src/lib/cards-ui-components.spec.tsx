import { render } from '@testing-library/react';

import CardsUiComponents from './cards-ui-components';

describe('CardsUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
