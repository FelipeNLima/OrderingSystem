## Description

Projeto desenvolvido como trabalho final do curso Software Architecture da Pós-Tech Fiap 2024.

## Sistema de autoatendimento de fast food

Requisitos para o desenvolvimento do projeto

**Pedido**

Os clientes são apresentados a uma interface de seleção na qual podem optar por se identificarem via CPF, se cadastrarem com nome, e-mail ou não se identificar, podendo montar o combo na seguinte sequência, sendo todas elas opcionais: Lanche Acompanhamento Bebida Sobremesa Em cada etapa é exibido o nome, descrição e preço de cada produto.

**Pagamento**

O sistema deverá possuir uma opção de pagamento integrada para MVP. A forma de pagamento oferecida será via QRCode do Mercado Pago.

**Acompanhamento**

Uma vez que o pedido é confirmado e pago, ele é enviado para a cozinha para ser preparado. Simultaneamente deve aparecer em um monitor para o cliente acompanhar o progresso do seu pedido com as seguintes etapas: Recebido Em preparação Pronto Finalizado

**Entrega**

Quando o pedido estiver pronto, o sistema deverá notificar o cliente que ele está pronto para retirada. Ao ser retirado, o pedido deve ser atualizado para o status finalizado. Além das etapas do cliente, o estabelecimento precisa de um acesso administrativo:

**Gerenciar clientes**

Com a identificação dos clientes o estabelecimento pode trabalhar em campanhas promocionais.

**Gerenciar produtos e categorias**

Os produtos dispostos para escolha do cliente serão gerenciados pelo estabelecimento, definindo nome, categoria, preço, descrição e imagens. Para esse sistema teremos categorias fixas: Lanche Acompanhamento Bebida Sobremesa

**Acompanhamento de pedidos**

Deve ser possível acompanhar os pedidos em andamento e tempo de espera de cada pedido. As informações dispostas no sistema de pedidos precisarão ser gerenciadas pelo estabelecimento através de um painel administrativo.

## Arquitetura
![arquitetura](/arquitetura.drawio.png.drawio)

Nosso serviço OrdemSystem vai estar em EKS dentro da nuvem da AWS, os CRUD's dos endpoints serão feitos em um RDS na nuvem tambem.

Teremos uma conexão com o mercado pago, para a realização do pagamento do pedido, onde no fluxo de inbound é feita a requisição para gerar um QRcode de pagamento, e no fluxo de outbound recebemos a confirmação do pagamento do pedido em nosso webhook.

## Intruções de uso

**01. Cadastro de usuário**

Chamar o endpoint POST/customers 

**02. Cadastro das categorias**

Chamar o endpoint POST/categories 

**03. Cadastro dos produtos**

Com as categorias dos produtos criada, chamar o endpoint 

POST/product

para cadastrar o produto com sua respectiva categoria.

**04. Realização do pedido**

Com as categorias e os produtos já cadastrados, chamar o endpoint 

POST/orders

para salvar o pedido feito.

**05. Cadastro do pagamento**

Para receber a confirmação do pedido, vamos receber uma requisição no webhook pelo endpoint 

POST/payments

## Developers

- Author - [Felipe José do Nascimento Lima](https://www.linkedin.com/in/felipe-lima-00bb62171/)
- Author - [Victor Ivo Gomes Henrique](https://www.linkedin.com/in/victor-ivo-henrique-68557313a/)
