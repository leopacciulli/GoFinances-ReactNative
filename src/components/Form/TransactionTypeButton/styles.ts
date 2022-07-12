import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  padding: 16px;

  ${({ type, isActive }) => 
    isActive && type === 'up'
      && css`background-color: ${({ theme }) => theme.colors.successLight}`
  };

  ${({ type, isActive }) => 
    isActive && type === 'down'
      && css`background-color: ${({ theme }) => theme.colors.attentionLight}`
  };
`;

export const Icon = styled(Feather)<IconProps>`
  color: ${({ theme, type }) => type === 'down' ? theme.colors.attention : theme.colors.success};
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;