import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto() {

    return (
        <div>
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    <h2>
                        <span style={{ color: 'darkgray' }}>
                            Produto &nbsp;<Icon name='angle double right' size="small" />
                        </span> Cadastro de Prato
                    </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Form>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome do Prato'
                                    maxLength="100"
                                    placeholder="Ex: Pizza Calabresa"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Categoria'
                                    placeholder="Ex: Pizza, Bebida, Sobremesa"
                                />
                            </Form.Group>

                            <Form.TextArea
                                label='Descrição'
                                placeholder='Descrição detalhada do prato...'
                                style={{ minHeight: 100 }}
                            />

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Preço (R$)'
                                    placeholder="Ex: 29.90"
                                    type="number"
                                    step="0.01"
                                />

                                <Form.Input
                                    fluid
                                    label='Tempo de Preparo (min)'
                                    placeholder="Ex: 30"
                                    type="number"
                                />
                            </Form.Group>

                            <Form.Input
                                fluid
                                label='URL da Imagem do Produto'
                                placeholder='Ex: https://meusite.com/imagens/pizza.jpg'
                            />

                        </Form>

                        <div style={{ marginTop: '4%' }}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

