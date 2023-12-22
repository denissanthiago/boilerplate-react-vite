/* eslint-disable import/no-extraneous-dependencies */
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

declare module 'vitest' {
  interface JestMatchers<T = unknown> extends jest.Matchers<void, T> {}
  interface JestTestingLibraryMatchers<T = unknown>
    extends TestingLibraryMatchers<T, void> {}
}

expect.extend(matchers);
