import { render } from '@testing-library/react';

import SmartCard from './smart-card';

describe('SmartCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmartCard type="Credit" />);
    expect(baseElement).toBeTruthy();
  });
});
