import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
};

export const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Dev',
      amount: 'R$ 8.000',
      category: {
        icon: 'dollar-sign',
        name: 'Vendas'
      },
      date: '12/10/2020'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Pizza',
      amount: 'R$ 60.00',
      category: {
        icon: 'coffee',
        name: 'Alimentação'
      },
      date: '15/10/2020'
    }
  ]

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/leopacciulli.png' }} />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Leonardo</UserName>
            </User>
          </UserInfo>

          <Icon name='power' />
        </UserContainer>
      </Header>

      <HighlightCards>
        <HighlightCard
          title='Entradas'
          amount='R$ 8.000'
          lastTransaction='Última entrada dia 13 de Abril'
          type='up'
        />
        <HighlightCard
          title='Saídas'
          amount='R$ 4.000'
          lastTransaction='Última saída dia 13 de Abril'
          type='down'
        />
        <HighlightCard
          title='Total'
          amount='R$ 4.000'
          lastTransaction='01 à 16 de Abril'
          type='total'
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}