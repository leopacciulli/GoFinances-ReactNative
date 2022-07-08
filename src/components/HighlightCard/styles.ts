import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>  type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(270)}px;
  border-radius: 8px;
  padding: 24px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>  type === 'total' ? theme.colors.shape : theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  
  ${({ type }) => type === 'up' && css`
    color: ${({ theme }) => theme.colors.success}
  `};

  ${({ type }) => type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention}
  `};

  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape}
  `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>  type === 'total' ? theme.colors.shape : theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 32px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>  type === 'total' ? theme.colors.shape : theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
