import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Radio } from 'semantic-ui-react';

export default function FormEntregador() {

    const [ativo, setAtivo] = React.useState(true);

    return (
        <div style={{ marginTop: '3%' }}>
            <Container textAlign='justified'>

                <h2>
                    <span style={{ color: 'darkgray' }}>
                        Entregador &nbsp;<Icon name='angle double right' size="small" />
                    </span> Cadastro
                </h2>

                <Divider />

                <div style={{ marginTop: '4%' }}>
                    <Form>

                        <Form.Group widths='equal'>
                            <Form.Input required fluid label='Nome' maxLength="100" />
                            <Form.Input required fluid label='CPF'>
                                <InputMask mask="999.999.999-99" required />
                            </Form.Input>
                            <Form.Input fluid label='RG' placeholder='Documento de identidade' />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input fluid label='DT Nascimento'>
                                <InputMask mask="99/99/9999" placeholder="Ex: 20/03/1985" />
                            </Form.Input>

                            <Form.Input fluid label='Fone Celular'>
                                <InputMask mask="(99) 99999.9999" />
                            </Form.Input>

                            <Form.Input fluid label='Fone Fixo'>
                                <InputMask mask="(99) 9999.9999" />
                            </Form.Input>
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input fluid label='QTD Entregas Realizadas' type='number' />
                            <Form.Input fluid label='Valor por Frete (R$)' type='number' step="0.01" />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Rua' />
                            <Form.Input fluid label='Número' />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Bairro' />
                            <Form.Input fluid label='Cidade' />
                            <Form.Input fluid label='UF' maxLength="2" />
                            <Form.Input fluid label='CEP'>
                                <InputMask mask="99999-999" />
                            </Form.Input>
                        </Form.Group>

                        <Form.Input fluid label='Complemento' />

                        <Form.Field>
                            <label>Ativo</label>
                            <Form.Group inline>
                                <Form.Field>
                                    <Radio
                                        label='Sim'
                                        name='ativo'
                                        checked={ativo === true}
                                        onChange={() => setAtivo(true)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='Não'
                                        name='ativo'
                                        checked={ativo === false}
                                        onChange={() => setAtivo(false)}
                                    />
                                </Form.Field>
                            </Form.Group>
                        </Form.Field>

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
    );
}