import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Boxed } from './Boxed.components';
import { Text } from './Text.components';
import EmptyStateIcon from '../assets/img/empty-state-white.png';
import { Theme } from '../utils/theme';

export const EmptyState = (props) => {
  const { title, desc } = props;
  return (
    <Boxed
      margin="0.15rem 0"
      pad="1.5rem 1.5rem"
      bColor={Theme.SecondaryDark}
      borderRadius="5px"
      align="center"
    >
      <Container fluid>
        <Row>
          <Col
            className="px-0"
            lg={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <Boxed pad="0.5rem" align="center">
              <img
                width="auto"
                height="130px"
                src={EmptyStateIcon}
                alt="Empty file"
              />
            </Boxed>
          </Col>
          <Col
            className="px-0"
            lg={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            style={{ display: 'flex' }}
          >
            <Boxed pad="0.5rem 1rem" align="center" margin="auto">
              <Text color={Theme.PrimaryTextColor} fontSize="18px">
                {' '}
                {title ? title : 'No Items'}
              </Text>
              <Text color={Theme.SecondaryTextColor} fontSize="14px">
                {desc ? desc : null}
              </Text>
            </Boxed>
          </Col>
        </Row>
      </Container>
    </Boxed>
  );
};
