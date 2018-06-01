// @flow
import styled from 'styled-components';
import { type Theme, type Values, _p, _px, _py, _pt, _pr, _pb, _pl } from './core';

export function p(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _p(values, theme);
  };
}

export function px(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _px(values, theme);
  };
}

export function py(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _py(values, theme);
  };
}

export function pt(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _pt(values, theme);
  };
}

export function pr(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _pr(values, theme);
  };
}

export function pb(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _pb(values, theme);
  };
}

export function pl(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _pl(values, theme);
  };
}

export const Padding = styled.div`
  ${({ inline }) => inline && 'display: inline-block;'}
  ${({ all, theme }) => _p(all, theme)}
  ${({ horizontal, theme }) => _px(horizontal, theme)} 
  ${({ vertical, theme }) => _py(vertical, theme)} 
  ${({ top, theme }) => _pt(top, theme)} 
  ${({ right, theme }) => _pr(right, theme)} 
  ${({ bottom, theme }) => _pb(bottom, theme)} 
  ${({ left, theme }) => _pl(left, theme)} 
`;

Padding.displayName = 'Padding';

export default Padding;
