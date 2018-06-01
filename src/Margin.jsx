// @flow
import styled from 'styled-components';
import { type Theme, type Values, _m, _mx, _my, _mt, _mr, _mb, _ml } from './core';

export function m(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _m(values, theme);
  };
}

export function mx(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _mx(values, theme);
  };
}

export function my(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _my(values, theme);
  };
}

export function mt(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _mt(values, theme);
  };
}

export function mr(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _mr(values, theme);
  };
}

export function mb(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _mb(values, theme);
  };
}

export function ml(values: Values) {
  return function({ theme }: { theme: Theme }) {
    return _ml(values, theme);
  };
}

export const Margin = styled.div`
  ${({ inline }) => inline && 'display: inline-block;'}
  ${({ all, theme }) => _m(all, theme)}
  ${({ horizontal, theme }) => _mx(horizontal, theme)} 
  ${({ vertical, theme }) => _my(vertical, theme)} 
  ${({ top, theme }) => _mt(top, theme)} 
  ${({ right, theme }) => _mr(right, theme)} 
  ${({ bottom, theme }) => _mb(bottom, theme)} 
  ${({ left, theme }) => _ml(left, theme)} 
`;

Margin.displayName = 'Margin';
