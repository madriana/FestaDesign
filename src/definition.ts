import { IDefinition } from '@tripetto/map';

export const SURVEY_DEFINITION: IDefinition = {
    "name": "Pesquisa - Artesão",
    "clusters": [
        {
            "id": "d68aae43c32e158b53068dcaeb6bed8e1e3b397216332af3f425013eae868ee2",
            "name": "Bem vindo",
            "nodes": [
                {
                    "id": "b5ec9b036049ad4a1fc0e0940d1a7136500bcc0b67351fa4c4820ad4620e614b",
                    "name": "Preenchido por:",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "3b9e3646df258f6f616c4c691f779a965e69b0b2b6f91eebfe78eb09f753fab3",
                            "type": "string",
                            "kind": "static",
                            "reference": "option",
                            "label": "Selected option"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-dropdown",
                        "version": "2.0.0",
                        "options": [
                            {
                                "id": "49132cf75362f1255085afadcb4ef4a10026e96fa3c2bcf36ebe5bdd231e361c",
                                "name": "Juliano Aparecido Pereira",
                                "value": "juliano_aparecido_pereira"
                            },
                            {
                                "id": "ca5d5fc9ea1a626137a1979286a3d47defb315346dcb085670922b8157706455",
                                "name": "Aline Teixeira de Souza",
                                "value": "aline_teixeira_de_souza"
                            },
                            {
                                "id": "f5fca12da6157f0247a83b5bdaedcb153f41d9df95cb10268f68f099d451a75f",
                                "name": "Lucas Farinelli Pantaleão",
                                "value": "lucas_farinelli_pantaleao"
                            },
                            {
                                "id": "0a650ef5563a7ad1dd78445c87162af76126da2bb986bd439657107b118b6094",
                                "name": "Rafaela Nunes Mendonça",
                                "value": "rafaela_nunes_mendonca"
                            },
                            {
                                "id": "d330c9033dbccf1c624696ddfddd22837328a7511dc357187ed5939c6b71e039",
                                "name": "Barbara Frade de Freitas Caetano",
                                "value": "barbara_frade_de_freitas_caetano"
                            },
                            {
                                "id": "2a99a153cb2761a40247e31d1b219dcd64c113183efd8972f8f4fe4290699c90",
                                "name": "Amanda Napolitano Petrucelli",
                                "value": "amanda_napolitano_petrucelli"
                            },
                            {
                                "id": "32e1ae516005760da6e1b636f0807e8003cb3e2537cdf4e20316581420867c4d",
                                "name": "Ana Gabriella Mendonça Sales",
                                "value": "ana_gabriella_mendonca_sales"
                            },
                            {
                                "id": "01cb5cfd5c443b1e6a10e53c2d4e2e80a9b21c7c282d2b4ed348e6b3110a190f",
                                "name": "Fernanda Oliveira Nascimento",
                                "value": "fernanda_oliveira_nascimento"
                            }
                        ]
                    }
                },
                {
                    "id": "3aa3016e2ff41e789df25dcca54faf95c7b62bc2f05de6e8f93418530e172b19",
                    "name": "Pesquisa sobre o trabalho Artesanal em Uberlândia",
                    "nameVisible": true,
                    "description": "🗨 *As informações pessoais disponibilizadas através do Formulário serão mantidas em sigilo, sendo utilizadas exclusivamente para fins de pesquisa acadêmica, análise e sistematização dos dados pelo Grupo de Pesquisa FESTA Design e também para contatos posteriores para a construção de ações de valorização dos produtos, produtores e modos de produção artesanal em Uberlândia (MG).\n*"
                },
                {
                    "id": "d6ea49b692e934fb853a09c21d0cb00e8ab4cce69588f209c1967e9fd8ee3dbd",
                    "name": "Parte A: Artesão",
                    "nameVisible": true,
                    "description": ""
                }
            ]
        },
        {
            "id": "a96965d63b719ab125498b3a55bafa87a43f5ca44d380e8d348423692ce22573",
            "name": "Dados iniciais",
            "nodes": [
                {
                    "id": "6bb19d29b0a05b8fc37240916d3ec779f7cf469b986bd5d4e78e6d50a03e8b48",
                    "explanation": "Nome completo",
                    "name": "1) 👋 Olá, @2dfc6a6947325ae704a80b579a321cf44dd980f1b3178ef1c518f76dec4b46d0!",
                    "nameVisible": true,
                    "placeholder": "Qual é o nome do Artesão ?",
                    "slots": [
                        {
                            "id": "2dfc6a6947325ae704a80b579a321cf44dd980f1b3178ef1c518f76dec4b46d0",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Text",
                            "alias": "NOME",
                            "transformation": "capitalize"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-text",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "c5bec951e2b5672d8ad4d1420e1159e2c8911a264ab0a797ccac377dd8fdc355",
                    "explanation": "Nome qual é mais popularmente conhecido",
                    "name": "2) Nome artístico:",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "2c1a09bb32ac9bb1b107bc31ecdbe5fb0f390084157ba471c90f2d51867578f3",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Text",
                            "alias": "NOME_ARTISTICO",
                            "transformation": "capitalize"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-text",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "d82d6daed03f11759714a59dda8a49342d18bb590207dc9ad2b747bd70c91364",
                    "explanation": "",
                    "name": "3) Marca:",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "82e99391c90a224049ea2be683e93d12bc588cf7da0d51604f4f345a8ed56a23",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Text",
                            "alias": "MARCA",
                            "transformation": "capitalize"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-text",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "aedbef2861121daa6067ec95bfc94e4b1a31f454fda9d45d7ded9333117df8bc",
                    "explanation": "",
                    "name": "4) Naturalidade:",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "321ee2f2651d7f0e8fe60354a00fdf1871e523ba718f793191f416b2834c574b",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Text",
                            "alias": "NATURALIDADE",
                            "transformation": "capitalize"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-text",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "a753af0ec95166067ee94b296dc23110766dc1ee4e6fbb372e374f8013f3e0b5",
                    "explanation": "",
                    "name": "5) Idade",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "bb9e191817158e13753582f1a2ca7ba1820720bfc20946e7054e83f2e0ede3f9",
                            "type": "numeric",
                            "kind": "static",
                            "reference": "number",
                            "label": "Number",
                            "alias": "IDADE"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-number",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "78c50f456d2b2c72c07bac50ab86fe725df1430f48e9a31aec518d15faa319bd",
                    "explanation": "",
                    "name": "6) Sexo:",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "8d6aeea32dce4be5ff5f169b51541706e17c6d7870fed5230b318e2b3d328c97",
                            "type": "string",
                            "kind": "static",
                            "reference": "option",
                            "label": "Selected option",
                            "alias": "GENERO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-dropdown",
                        "version": "2.0.0",
                        "options": [
                            {
                                "id": "5d0d50cc5d4242cda6c6736b20c83d3d7b58086c6009f12929c78d4939fbeec3",
                                "name": "Masculino",
                                "value": ""
                            },
                            {
                                "id": "0e9a0d83416e12051f0fcc0a11c08c639c609a97ea0aa00dad551be609c4f8e2",
                                "name": "Feminino",
                                "value": ""
                            }
                        ]
                    }
                },
                {
                    "id": "38cba50ccd9661bab0705ee07225b15d7fb9c4787fab40a30a775a366ba7ba60",
                    "explanation": "",
                    "name": "7) Endereço residencial:",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "19e993350b38853a6d57fc11469375e1c48e72c0ef87a491b7cd98cadf7bf6bd",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Text",
                            "alias": "ENDERECO_RESIDENCIAL"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-text",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "78f8770178a0e88a414f716e9540618f2d3fe41ad1c7fe7880a9ad8d04af6819",
                    "explanation": "",
                    "name": "8) Endereço profissional de produção:",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "dada3de23dd234da749a1abd0c1ea604bc56966aece26fe332c9f66adb01b217",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Text",
                            "alias": "ENDERECO_PROFISSIONAL_PRODUCAO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-text",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "152c8d488ce616542fc228b0092f6cefae589020ea24b1f7b4f19e02ec83fe10",
                    "explanation": "",
                    "name": "9) Endereço profissional de venda:",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "1bdd5ce5b6312a8a74de52345b0abd0132fd10f218bc21f1b36c62c93175138b",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Text",
                            "alias": "ENDERECO_PROFISSIONAL_VENDA"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-text",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "b387374958b4fb05d49523771742b014cf7df710dbb51da092dfa877e64760c6",
                    "explanation": "Apenas números!",
                    "name": "10) Celular (WhatsApp)",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "e2e54719893712ab98fdaf4ef98c4afb559c150de636aa6b6707626dd8e69c0a",
                            "type": "numeric",
                            "kind": "static",
                            "reference": "number",
                            "label": "Number",
                            "alias": "CELULAR"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-number",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "8303ab4eb667f6fbc878e527b3bff8504dd371d03c7a3a8f418cfa0a58a69719",
                    "explanation": "",
                    "name": "11) FaceBook",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "6e189c79bc352969e511daeb8c2d331d5db5e0639c061bdbbca652a07e5dc489",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Text"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-text",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "96b4f689dcb36fc3fa70f941d240e74d944b36deaa43863d634cd7bfec2a6928",
                    "explanation": "",
                    "name": "12) Instagram",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "718b4c17f9c7096c60820230100f588d0383485efa3fbb0c61806760fbacfcea",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Text"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-text",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "209e684343c619a0a5d6731ed5020bd5d628ee8265f7001c04e293dfddc7ef15",
                    "explanation": "",
                    "name": "13) Outros",
                    "nameVisible": true,
                    "placeholder": "",
                    "slots": [
                        {
                            "id": "7893492505d8b13a1dc703be2bc0afcbd39f75684a0deadf514e8d94043a050d",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Multi-line text",
                            "alias": "OUTROS_CONTATOS"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-textarea",
                        "version": "2.0.0"
                    }
                }
            ]
        },
        {
            "id": "a036eff8aa48d2ad8d9e2bbb2d4afd32aa6469d2ef70f21915447be3b1ce1c64",
            "name": "Vinculo com associação",
            "nodes": [
                {
                    "id": "c334ba33687ab9c6d9c0f21142dc4c5d28fb2a43b45b8491f3a5708d47bfd92e",
                    "name": "14) Vinculo com alguma associação?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "76bd1e0a6f84689c0ee4a833a16725b1f65ae43b8acfa9a733c860a3703b76e2",
                            "type": "string",
                            "kind": "static",
                            "reference": "answer",
                            "label": "Answer",
                            "alias": "POSSUI_VINCULO_ASSOCIACAO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-yes-no",
                        "version": "1.0.4"
                    }
                }
            ],
            "branches": [
                {
                    "id": "7607c495a20950e1d1dc41258d9620151250daace6e9270b22f8112613d2a304",
                    "name": "Possui vínculo",
                    "clusters": [
                        {
                            "id": "18dcbda97195787a4c92150d24947c2030bab459228c38698d499337ab4f58a5",
                            "name": "Nome da associação",
                            "nodes": [
                                {
                                    "id": "57d82975fa0fb0f3428e33335c3522cb36dc74a81fa5cf505aa25a9e301d92b1",
                                    "name": "14.1) Qual o nome da associação ?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "80878bc6a6045ce6e9cb6749751db321fc8ec799136896ede8a4d5240888905d",
                                            "type": "text",
                                            "kind": "static",
                                            "reference": "value",
                                            "label": "Text",
                                            "alias": "POSSUI_VINCULO_ASSOCIACAO.NOME_ASSOCIACAO"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-text",
                                        "version": "2.0.0"
                                    }
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "68137ba3e334844fd4d3f398ccccbf96a1ae8481bba8104487a54ed6b0c13c3f",
                            "block": {
                                "type": "tripetto-block-yes-no:yes",
                                "version": "0.0.0",
                                "node": "c334ba33687ab9c6d9c0f21142dc4c5d28fb2a43b45b8491f3a5708d47bfd92e",
                                "slot": "76bd1e0a6f84689c0ee4a833a16725b1f65ae43b8acfa9a733c860a3703b76e2"
                            }
                        }
                    ],
                    "culling": "each"
                }
            ]
        },
        {
            "id": "8a24f3b308ba68c9ad6c70d54f52ada006135e415f20de1cc9023b34d24573d9",
            "nodes": [
                {
                    "id": "a2d14e0af51872c6ceb0059984f0240ed604a911828726b39db2eff62a09aa27",
                    "name": "15) Possui empresa?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "5c4d93813212bdefa787463c5a7f4ffed0d338c168c919a9f5d3404f328b9f85",
                            "type": "string",
                            "kind": "static",
                            "reference": "answer",
                            "label": "Answer",
                            "alias": "POSSUI_EMPRESA"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-yes-no",
                        "version": "1.0.4"
                    }
                }
            ],
            "branches": [
                {
                    "id": "f0f32f7c201c538820d730dc52e25d91dd9a09e666c2d922a460459bef74a3d4",
                    "name": "Possui empresa",
                    "clusters": [
                        {
                            "id": "fdcd90b57836f9eeeea7b30883b7495314112647b3522cc7432a7aa00444ce53",
                            "name": "Nome da empresa",
                            "nodes": [
                                {
                                    "id": "a26bcc165bc2c6243a282232ea402814560ac1fa4275f1a1a1a2140e5c783ac2",
                                    "name": "15.1) Qual o nome da empresa ?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "bcfdd91dcc5585e67d886f251d38a133726a49723606bedef242021bf6b02ca8",
                                            "type": "text",
                                            "kind": "static",
                                            "reference": "value",
                                            "label": "Text",
                                            "alias": "POSSUI_EMPRESA.NOME_EMPRESA"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-text",
                                        "version": "2.0.0"
                                    }
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "4970936e210b593bbd2bc8917aebea4e3a30d401bd4e55503309e11f6db9a6ed",
                            "block": {
                                "type": "tripetto-block-yes-no:yes",
                                "version": "0.0.0",
                                "node": "a2d14e0af51872c6ceb0059984f0240ed604a911828726b39db2eff62a09aa27",
                                "slot": "5c4d93813212bdefa787463c5a7f4ffed0d338c168c919a9f5d3404f328b9f85"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "212ac82f28276db89cfe17252b4e1eea7599a056c081d89f084487921bb266d8",
            "name": "Formação escolar",
            "nodes": [
                {
                    "id": "62bcea1c19f8370a89123443712c4a66e73c3c9878e456b75fb1c43b78dbb0c7",
                    "name": "16) Formação escolar",
                    "nameVisible": true,
                    "description": "Queremos saber um pouco mais sobre a formação escolar do Artesão",
                    "slots": [
                        {
                            "id": "b52e763e6de59d87dc63a9ee5d6fba5a6924f4056e1a6fdae2b6e71f7e54ab02",
                            "type": "string",
                            "kind": "static",
                            "reference": "choice",
                            "label": "Choice",
                            "alias": "FORMACAO_ESCOLAR"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-multiple-choice",
                        "version": "1.0.2",
                        "choices": [
                            {
                                "id": "2bc333d11e8d51f5857c613a763b3bf8c57f01f833a4fe4ee3583196e8bec96b",
                                "name": "Não possui escolaridade",
                                "value": "FORMACAO_ESCOLAR.SEM_ESCOLARIDADE"
                            },
                            {
                                "id": "0a096ce7e3a2c55935984e92db50be969081e7afb69e30a6586b581e78f0e015",
                                "name": "Ensino Fundamental 1",
                                "value": "FORMACAO_ESCOLAR.ENSINO_FUNDAMENTAL_1"
                            },
                            {
                                "id": "488fb1476b12fae5b8056424570f95bce4c843df7e0c49b77d752d4fa4d46330",
                                "name": "Ensino Fundamental 2",
                                "value": "FORMACAO_ESCOLAR.ENSINO_FUNDAMENTAL_2"
                            },
                            {
                                "id": "51aaf52f890c57315b0ba074d49c400370d7b5631164fd62cd8dcbdacbc41309",
                                "name": "Ensino Médio",
                                "value": "FORMACAO_ESCOLAR.ENSINO_MEDIO"
                            },
                            {
                                "id": "c9649c82de5709f0ffd74c439f02f773037c284aa863121c9a1549d9c9110313",
                                "name": "Educação Superior",
                                "value": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR"
                            }
                        ],
                        "multiple": false,
                        "alias": "FORMACAO_ESCOLAR"
                    }
                }
            ],
            "branches": [
                {
                    "id": "7f946694e3ee3a9849d65b1ae2caaad40b1886391fcf53cfc63039b12733689d",
                    "name": "Ensino fundamental",
                    "clusters": [
                        {
                            "id": "ccb1c2ef7f964ba47889f22cfa36cdd16f25c6d2c8b12aae5d7d78aa9b419f7d",
                            "name": "Nível ensino fundamental",
                            "nodes": [
                                {
                                    "id": "fbeb72b907610e21838d984c1bdbbec7c352cca354cd6dd10203fb6a1d7e7488",
                                    "name": "16.1) Marque uma opção:",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "f8101cff8dbe18120b672c316766f1439d54da3fecc0d408bddc26fb118ad1ae",
                                            "type": "string",
                                            "kind": "static",
                                            "reference": "choice",
                                            "label": "Choice",
                                            "alias": "FORMACAO_ESCOLAR.COMPLETOU_ENSINO_FUNDAMENTAL_MEDIO"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-multiple-choice",
                                        "version": "1.0.2",
                                        "choices": [
                                            {
                                                "id": "de5a6f9225ee8112ce81df8f2607b428f99715b30d3c319fb16913509d93bf97",
                                                "name": "Completo",
                                                "value": "FORMACAO_ESCOLAR.COMPLETOU_ENSINO_FUNDAMENTAL_MEDIO.COMPLETO"
                                            },
                                            {
                                                "id": "6173f851e6423df1f6eae1be41a828f5a027d6a5990bea8c863cf94bd8f5b133",
                                                "name": "Incompleto",
                                                "value": "FORMACAO_ESCOLAR.COMPLETOU_ENSINO_FUNDAMENTAL_MEDIO.INCOMPLETO"
                                            }
                                        ],
                                        "alias": "FORMACAO_ESCOLAR.COMPLETOU_ENSINO_FUNDAMENTAL_MEDIO"
                                    }
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "95c07c8ebf6cef40bdeb671dabff8cb309be15725487f195b623c63ed1793e82",
                            "block": {
                                "choice": "0a096ce7e3a2c55935984e92db50be969081e7afb69e30a6586b581e78f0e015",
                                "type": "tripetto-block-multiple-choice",
                                "version": "0.0.0",
                                "node": "62bcea1c19f8370a89123443712c4a66e73c3c9878e456b75fb1c43b78dbb0c7",
                                "slot": "b52e763e6de59d87dc63a9ee5d6fba5a6924f4056e1a6fdae2b6e71f7e54ab02"
                            }
                        },
                        {
                            "id": "f956235dfbc18193d5d5424487c72f903d0eea28a39843c1c919c10db0e6da38",
                            "block": {
                                "choice": "488fb1476b12fae5b8056424570f95bce4c843df7e0c49b77d752d4fa4d46330",
                                "type": "tripetto-block-multiple-choice",
                                "version": "0.0.0",
                                "node": "62bcea1c19f8370a89123443712c4a66e73c3c9878e456b75fb1c43b78dbb0c7",
                                "slot": "b52e763e6de59d87dc63a9ee5d6fba5a6924f4056e1a6fdae2b6e71f7e54ab02"
                            }
                        },
                        {
                            "id": "e3d472cecc4e2c5ab2de6d317768cc227705dc755350c8fa442baf773db5c4a3",
                            "block": {
                                "choice": "51aaf52f890c57315b0ba074d49c400370d7b5631164fd62cd8dcbdacbc41309",
                                "type": "tripetto-block-multiple-choice",
                                "version": "0.0.0",
                                "node": "62bcea1c19f8370a89123443712c4a66e73c3c9878e456b75fb1c43b78dbb0c7",
                                "slot": "b52e763e6de59d87dc63a9ee5d6fba5a6924f4056e1a6fdae2b6e71f7e54ab02"
                            }
                        }
                    ]
                },
                {
                    "id": "10f21d0ddcd1b27797bba7b46243223121faaa5ebc62b7716375321c09055202",
                    "name": "Ensino superior",
                    "clusters": [
                        {
                            "id": "f4e81b870712ba97b4b9a719eb220a98e30fa3e10187dd2b8f4b0160270fe974",
                            "nodes": [
                                {
                                    "id": "5e09fa9a96091e16a6cf59e37a660111565f41a118df3fc9eb331277c8cd966c",
                                    "name": "16.1) Qual é o nome da graduação ?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "8fe20a947f8e5d099b9079c4d0a2f2eb9c5b9e80cebf1dbaba05294b432ee63c",
                                            "type": "text",
                                            "kind": "static",
                                            "reference": "value",
                                            "label": "Text",
                                            "alias": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.NOME_GRADUACAO"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-text",
                                        "version": "2.0.0"
                                    }
                                }
                            ]
                        },
                        {
                            "id": "0d30f582615ec4e012b9c275cdffe1f32bfb2ec7640ccd3d857a763cf75dc958",
                            "name": "Ensino superior",
                            "nodes": [
                                {
                                    "id": "8a2c57af355587249b5e6c85bba83010f55c63d2921bee805bf0bbb635a35e59",
                                    "name": "16.1.1) O quão longe foi o artesão em sua formação superior ?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "d7cd5f0546c3a76131eec2686e89c6c50816571f0ae5ecad34e31a50f4546fc8",
                                            "type": "string",
                                            "kind": "static",
                                            "reference": "choice",
                                            "label": "Choice",
                                            "alias": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.NIVEIS_GRADUACAO"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-multiple-choice",
                                        "version": "1.0.2",
                                        "choices": [
                                            {
                                                "id": "48a493ac04e3e7bd681c734aad722b8c9f77da5cd9c50dc2da2d0c0cec08a9fd",
                                                "name": "Graduação",
                                                "value": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.NIVEIS_GRADUACAO.GRADUACAO"
                                            },
                                            {
                                                "id": "45be9bedb6510ada075eb4d710d5d67c0636b7774874f76934f62e0db2f5003f",
                                                "name": "Pós-graduação: especialização",
                                                "value": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.NIVEIS_GRADUACAO.ESPECIALIZACAO"
                                            },
                                            {
                                                "id": "6a6a9bd57bbd82d4edc12ad0c8ba271a42ad6503206e4adba8095e8ecf6224cd",
                                                "name": "Pós-graduação: mestrado",
                                                "value": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.NIVEIS_GRADUACAO.MESTRADO"
                                            },
                                            {
                                                "id": "4ea242517d63a0b668ab106240b8407563a071ca087ef12ced55e8be000c2c72",
                                                "name": "Pós-graduação: doutorado",
                                                "value": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.NIVEIS_GRADUACAO.DOUTORADO"
                                            }
                                        ],
                                        "alias": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.NIVEIS_GRADUACAO"
                                    }
                                },
                                {
                                    "id": "721a3b0160c0114e65ea11fe5684448e8447bd2896ce1337b6609be83e21d5e0",
                                    "name": "16.1.2) Marque uma opção:",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "d8203c9c46e4ac54d4decd15a3b6daa32b7311c395b3347b0268c1c830351a75",
                                            "type": "string",
                                            "kind": "static",
                                            "reference": "choice",
                                            "label": "Choice",
                                            "alias": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.COMPLETOU_GRADUACAO"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-multiple-choice",
                                        "version": "1.0.2",
                                        "choices": [
                                            {
                                                "id": "43ddb373ea9190664177c291cb7f83c75996a003da186f5170715c54777858d3",
                                                "name": "Completo",
                                                "value": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.COMPLETOU_GRADUACAO.COMPLETO"
                                            },
                                            {
                                                "id": "6b84573379c2f78a26103aae15eb23c0d8824f250f32d2b9c3c59fc574e74049",
                                                "name": "Incompleto",
                                                "value": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.COMPLETOU_GRADUACAO.INCOMPLETO"
                                            }
                                        ],
                                        "alias": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.COMPLETOU_GRADUACAO"
                                    }
                                }
                            ],
                            "branches": [
                                {
                                    "id": "1147406737a43d07ee7f99632b1a8cbf7ab7b31482ee8a643b0079e7730a6206",
                                    "clusters": [
                                        {
                                            "id": "a9cb4fdfee663dcd919a8103097bccfdc5c8dcac432cdff40dc09739e9280c6a",
                                            "nodes": [
                                                {
                                                    "id": "14690d1a8a9aae5b1385e83472771b05520f53668272c93cd73ae8e5f5eeeab3",
                                                    "name": "16.1.3) Qual foi o nome da Pós-graduação ?",
                                                    "nameVisible": true,
                                                    "slots": [
                                                        {
                                                            "id": "60ec7a4d435979de2f92c92f6748e9345c16b52d7512ddc8264ee6f342d5d1a8",
                                                            "type": "text",
                                                            "kind": "static",
                                                            "reference": "value",
                                                            "label": "Text",
                                                            "alias": "FORMACAO_ESCOLAR.EDUCACAO_SUPERIOR.NIVEIS_GRADUACAO.NOME_POS_GRADUACAO"
                                                        }
                                                    ],
                                                    "block": {
                                                        "type": "tripetto-block-text",
                                                        "version": "2.0.0"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "id": "161cc60b31a6a34cb2775492bd9d32433dd3037db5034a44e7b6517c3f5bb766",
                                            "block": {
                                                "choice": "45be9bedb6510ada075eb4d710d5d67c0636b7774874f76934f62e0db2f5003f",
                                                "type": "tripetto-block-multiple-choice",
                                                "version": "0.0.0",
                                                "node": "8a2c57af355587249b5e6c85bba83010f55c63d2921bee805bf0bbb635a35e59",
                                                "slot": "d7cd5f0546c3a76131eec2686e89c6c50816571f0ae5ecad34e31a50f4546fc8"
                                            }
                                        },
                                        {
                                            "id": "6d0cfa46859b997be7dfc1a3ff424b97abd246d2488d760e543267ee8f95f73e",
                                            "block": {
                                                "choice": "6a6a9bd57bbd82d4edc12ad0c8ba271a42ad6503206e4adba8095e8ecf6224cd",
                                                "type": "tripetto-block-multiple-choice",
                                                "version": "0.0.0",
                                                "node": "8a2c57af355587249b5e6c85bba83010f55c63d2921bee805bf0bbb635a35e59",
                                                "slot": "d7cd5f0546c3a76131eec2686e89c6c50816571f0ae5ecad34e31a50f4546fc8"
                                            }
                                        },
                                        {
                                            "id": "b994835821be25619e9711e419419bd2ba67427f5fcf2bf0e36f0e07feb7fdbb",
                                            "block": {
                                                "choice": "4ea242517d63a0b668ab106240b8407563a071ca087ef12ced55e8be000c2c72",
                                                "type": "tripetto-block-multiple-choice",
                                                "version": "0.0.0",
                                                "node": "8a2c57af355587249b5e6c85bba83010f55c63d2921bee805bf0bbb635a35e59",
                                                "slot": "d7cd5f0546c3a76131eec2686e89c6c50816571f0ae5ecad34e31a50f4546fc8"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "9971cb1debe9921f960c72c9f48b491ae841002d8ae9058c5439987530355e9c",
                            "block": {
                                "choice": "c9649c82de5709f0ffd74c439f02f773037c284aa863121c9a1549d9c9110313",
                                "type": "tripetto-block-multiple-choice",
                                "version": "0.0.0",
                                "node": "62bcea1c19f8370a89123443712c4a66e73c3c9878e456b75fb1c43b78dbb0c7",
                                "slot": "b52e763e6de59d87dc63a9ee5d6fba5a6924f4056e1a6fdae2b6e71f7e54ab02"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "c03edfbb9a3862accb1ccd0454e741a1fbc84a3810503a27e67e6e97cce8f8c5",
            "name": "Como teve contato com o artesanato ?",
            "nodes": [
                {
                    "id": "2cd51e4707d185259b6fed291aa624109eb832f65816962c198adf53a28cd996",
                    "name": "17) Como teve contato com o artesanato?",
                    "nameVisible": true,
                    "description": "(Pode escolher mais de uma opção)",
                    "slots": [
                        {
                            "id": "8a247513e0520660b4e5e592c0769b807d6890d914aadc80b199f6d7feb99c9e",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "987751ddb8bf20cf14da04676112058a5a4cc29877f122d5e7f4165aac989a84",
                            "sequence": 0,
                            "label": "Choice",
                            "name": "Herança ou tradição familiar",
                            "alias": "CONTATO_ARTESANATO.HERANCA_TRADICAO_FAMILIAR",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "CONTATO_ARTESANATO"
                            }
                        },
                        {
                            "id": "8338293f7f7ec97e8276314e6a8f8b5000bd35149d14d1152b034560ad814fc5",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "51d0e1af63ea154b2e8bb0c0fc3dc1e0c742fa41e17d74c75942ee1b3cd4dc40",
                            "sequence": 1,
                            "label": "Choice",
                            "name": "Grupos culturais e/ou de identidade social",
                            "alias": "CONTATO_ARTESANATO.GRUPOS_CULTURAIS_IDENTIDADE_SOCIAL",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "CONTATO_ARTESANATO"
                            }
                        },
                        {
                            "id": "c066c0a3422e9bea41523137cb27246d0629805ad8e8d5a732aeea2186f51ba6",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "b72ee75206458b9480c5e9d8d0fee3c7adc765e73043ada9e261df42cff77d44",
                            "sequence": 2,
                            "label": "Choice",
                            "name": "Formação em instituição especializada",
                            "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "CONTATO_ARTESANATO"
                            }
                        },
                        {
                            "id": "491eff4e02af83ea4c5a300ab144c2f31899ece3af995c4d868c1a56b90eb9cc",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "9fc028c2fd12e67385a85a9fc6fc1becb25614a25eb233ea6b9e0da61d54ef81",
                            "sequence": 3,
                            "label": "Choice",
                            "name": "Mídias digitais / internet",
                            "alias": "CONTATO_ARTESANATO.MIDIAS_DIGITAIS_INTERNET",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "CONTATO_ARTESANATO"
                            }
                        },
                        {
                            "id": "c8644e4b1a06fa9572fd715e14fe3ab9e0da6dd78efd27c26d1ea9170586070a",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "1c58ec814647ee01628a15cbcb96bc11db8dccffb4baf3b2232d46e348c51c08",
                            "sequence": 4,
                            "label": "Choice",
                            "name": "Aprendizado com amigos",
                            "alias": "CONTATO_ARTESANATO.APRENDIZADO_AMIGOS",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "CONTATO_ARTESANATO"
                            }
                        },
                        {
                            "id": "e8719d83dc31fa2d993603d33e990828226d74431daa70f64a4e83bc91b317a4",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "4dc1f768f4e1d803c42aabf37453943c67d110aa2af7a9fbe70dcf6444748a20",
                            "sequence": 5,
                            "label": "Choice",
                            "name": "Autodidata",
                            "alias": "CONTATO_ARTESANATO.AUTODIDATA",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "CONTATO_ARTESANATO"
                            }
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-multiple-choice",
                        "version": "1.0.2",
                        "choices": [
                            {
                                "id": "987751ddb8bf20cf14da04676112058a5a4cc29877f122d5e7f4165aac989a84",
                                "name": "Herança ou tradição familiar",
                                "value": "CONTATO_ARTESANATO.HERANCA_TRADICAO_FAMILIAR"
                            },
                            {
                                "id": "51d0e1af63ea154b2e8bb0c0fc3dc1e0c742fa41e17d74c75942ee1b3cd4dc40",
                                "name": "Grupos culturais e/ou de identidade social",
                                "value": "CONTATO_ARTESANATO.GRUPOS_CULTURAIS_IDENTIDADE_SOCIAL"
                            },
                            {
                                "id": "b72ee75206458b9480c5e9d8d0fee3c7adc765e73043ada9e261df42cff77d44",
                                "name": "Formação em instituição especializada",
                                "value": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA"
                            },
                            {
                                "id": "9fc028c2fd12e67385a85a9fc6fc1becb25614a25eb233ea6b9e0da61d54ef81",
                                "name": "Mídias digitais / internet",
                                "value": "CONTATO_ARTESANATO.MIDIAS_DIGITAIS_INTERNET"
                            },
                            {
                                "id": "1c58ec814647ee01628a15cbcb96bc11db8dccffb4baf3b2232d46e348c51c08",
                                "name": "Aprendizado com amigos",
                                "value": "CONTATO_ARTESANATO.APRENDIZADO_AMIGOS"
                            },
                            {
                                "id": "4dc1f768f4e1d803c42aabf37453943c67d110aa2af7a9fbe70dcf6444748a20",
                                "name": "Autodidata",
                                "value": "CONTATO_ARTESANATO.AUTODIDATA"
                            }
                        ],
                        "multiple": true,
                        "alias": "CONTATO_ARTESANATO"
                    }
                }
            ],
            "branches": [
                {
                    "id": "6827ce9c4abda79855ba68ee04bb7af92120d16d21a16f017f986d08915490ff",
                    "clusters": [
                        {
                            "id": "0fd2760c471acf59a3546d0b3e0fef64f330428bca762b4a7b42767c6b2e60bb",
                            "name": "Opções de formação em instituição especializada",
                            "nodes": [
                                {
                                    "id": "435c4c89b4290568617a2a526677e462d2f4ad647864a881bb3184927678c6b4",
                                    "name": "17.1) @d31057c728010e4f50f63b1ec964482d3fde3eb96b1333fdca286099348d74ed",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "34711c7125ccd1d80d72eb295031adc29ed84ae243ae7a83f8b5df10ff73f73d",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "200bb4b01a13bb67e01720c9e47de25eccd13c1838695e6f314d42e0aa7efcee",
                                            "sequence": 0,
                                            "label": "Choice",
                                            "name": "Escola",
                                            "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.ESCOLA",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA"
                                            }
                                        },
                                        {
                                            "id": "e612f6139b1f89106a3397b69e31d3f6ee7ddefc1fbe94cf4e857dc6420773e0",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "a19ff33e8f6d691b14364afad2120d1a6f8689d2e3356e4f40e9fe3206d597a0",
                                            "sequence": 1,
                                            "label": "Choice",
                                            "name": "Igrejas",
                                            "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.IGREJAS",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA"
                                            }
                                        },
                                        {
                                            "id": "b6bf273c8e835a4e066092aae4879f19ed09b4062a6e3f6a7f15722a9c817c39",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "6f7c38aef31300c3eb56f0af755a94a212aff113269a52ddc68e80e2dad0b4c0",
                                            "sequence": 2,
                                            "label": "Choice",
                                            "name": "Associação de Bairro",
                                            "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.ASSOCIACAO_BAIRRO",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA"
                                            }
                                        },
                                        {
                                            "id": "e2a6c5dacc8d1b84cedd916c567a45b4d98e224d0d0776fd73082f1540e52714",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "468a95ed08a87ec835af4e8863d21be5a2431a6648b282c81a9c1096f38fd06e",
                                            "sequence": 3,
                                            "label": "Choice",
                                            "name": "Prefeitura",
                                            "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.PREFEITURA",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA"
                                            }
                                        },
                                        {
                                            "id": "45f4f713a7708d0afd7124f14a302019fb493df4f49b69503ca7810f45365502",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "95ecf2f3fc7870639d8cc13bf46d6c3581795e343675501964886ea1986b0e1f",
                                            "sequence": 4,
                                            "label": "Choice",
                                            "name": "Outros",
                                            "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.OUTROS",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA"
                                            }
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-multiple-choice",
                                        "version": "1.0.2",
                                        "choices": [
                                            {
                                                "id": "200bb4b01a13bb67e01720c9e47de25eccd13c1838695e6f314d42e0aa7efcee",
                                                "name": "Escola",
                                                "value": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.ESCOLA"
                                            },
                                            {
                                                "id": "a19ff33e8f6d691b14364afad2120d1a6f8689d2e3356e4f40e9fe3206d597a0",
                                                "name": "Igrejas",
                                                "value": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.IGREJAS"
                                            },
                                            {
                                                "id": "6f7c38aef31300c3eb56f0af755a94a212aff113269a52ddc68e80e2dad0b4c0",
                                                "name": "Associação de Bairro",
                                                "value": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.ASSOCIACAO_BAIRRO"
                                            },
                                            {
                                                "id": "468a95ed08a87ec835af4e8863d21be5a2431a6648b282c81a9c1096f38fd06e",
                                                "name": "Prefeitura",
                                                "value": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.PREFEITURA"
                                            },
                                            {
                                                "id": "95ecf2f3fc7870639d8cc13bf46d6c3581795e343675501964886ea1986b0e1f",
                                                "name": "Outros",
                                                "value": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.OUTROS"
                                            }
                                        ],
                                        "multiple": true,
                                        "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA"
                                    }
                                }
                            ],
                            "branches": [
                                {
                                    "id": "bc5f681d06576d3212750a66fa390b7220e2e66e9f9c7c494f4543611bc8622b",
                                    "name": "Outros",
                                    "clusters": [
                                        {
                                            "id": "1f4ed2cccbb98118e4a759235299dc598216d3f2ed2591dbcd9274f8f68d46da",
                                            "nodes": [
                                                {
                                                    "id": "e69fa931ecee6b126d433a3dd3aa899ebb8f5a5dd94d5116191b1469c0554503",
                                                    "name": "17.1.1) Qual outro ?",
                                                    "nameVisible": true,
                                                    "slots": [
                                                        {
                                                            "id": "5569d8a4488bd635e4fe4c71efb0b75e26709deadeab7c82c840b1dacb8a1cda",
                                                            "type": "text",
                                                            "kind": "static",
                                                            "reference": "value",
                                                            "label": "Text",
                                                            "alias": "CONTATO_ARTESANATO.FORMACAO_INSTITUICAO_ESPECIALIZADA.OUTROS.NOME_OUTRO"
                                                        }
                                                    ],
                                                    "block": {
                                                        "type": "tripetto-block-text",
                                                        "version": "2.0.0"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "id": "2434cb253de44544966db464a52b30e49b34b189983f8792f7fe08f8413754a0",
                                            "block": {
                                                "choice": "95ecf2f3fc7870639d8cc13bf46d6c3581795e343675501964886ea1986b0e1f",
                                                "type": "tripetto-block-multiple-choice",
                                                "version": "0.0.0",
                                                "node": "435c4c89b4290568617a2a526677e462d2f4ad647864a881bb3184927678c6b4",
                                                "slot": "45f4f713a7708d0afd7124f14a302019fb493df4f49b69503ca7810f45365502"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "fc2c824c841cb41a99d89f18d13d9aa332b93f53e7fcd896fbcbe0a93ea3e78a",
                            "block": {
                                "choice": "b72ee75206458b9480c5e9d8d0fee3c7adc765e73043ada9e261df42cff77d44",
                                "type": "tripetto-block-multiple-choice",
                                "version": "0.0.0",
                                "node": "2cd51e4707d185259b6fed291aa624109eb832f65816962c198adf53a28cd996",
                                "slot": "c066c0a3422e9bea41523137cb27246d0629805ad8e8d5a732aeea2186f51ba6"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "eb5b9077bc3db9ade0e5475da574d99aaeb826a55a655233daff5aff3a8a2a6e",
            "name": "A quanto tempo produz artesanato?",
            "nodes": [
                {
                    "id": "889377e2b9d1e4e32c01f5f4203da22e56dce0c33f2446f6a057817eadb0ce19",
                    "name": "18) A quanto tempo o artesão produz artesanato?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "21b5dc8d32ae1738f3cd611377422f6115831d6ba6489a152555333df401ee13",
                            "type": "string",
                            "kind": "static",
                            "reference": "choice",
                            "label": "Choice",
                            "alias": "TEMPO_PRODUCAO_ARTESANATO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-multiple-choice",
                        "version": "1.0.2",
                        "choices": [
                            {
                                "id": "4a5042c1eb40647d2213ffcd633c353c273c719060d33758b3124d323196c5f8",
                                "name": "Menos de 3 anos",
                                "value": "TEMPO_PRODUCAO_ARTESANATO.MENOS_03_ANOS"
                            },
                            {
                                "id": "071fc30f19fb07afee3a6cfefd131e1138699381bc7dd7ec8d9fd74e1ef4d860",
                                "name": "4 a 6 anos",
                                "value": "TEMPO_PRODUCAO_ARTESANATO.04_06_ANOS"
                            },
                            {
                                "id": "ed3a5ee3cfcc6e93190575a698bd8372a9f0dfb9ba29984c2b64ef9e08a9222d",
                                "name": "7 a 9 anos",
                                "value": "TEMPO_PRODUCAO_ARTESANATO.07_09_ANOS"
                            },
                            {
                                "id": "a0e1d11a05f757c1a604ba921397bcba3dd2cac3b7713e97645c89b8eca17ba0",
                                "name": "9 a 12 anos",
                                "value": "TEMPO_PRODUCAO_ARTESANATO.09_12_ANOS"
                            },
                            {
                                "id": "da3746f45fcebf24b8b92ee0aa93e841505eb05dd76539119dcb919bc1d9f94d",
                                "name": "13 a 15 anos",
                                "value": "TEMPO_PRODUCAO_ARTESANATO.13_15_ANOS"
                            },
                            {
                                "id": "5557c3a4f895dc6f0fc4daaf3238cb2dcb5b6877f0602e80d2c052d58ab66940",
                                "name": "16 a 18 anos",
                                "value": "TEMPO_PRODUCAO_ARTESANATO.16_18_ANOS"
                            },
                            {
                                "id": "13414d5de04e63852f6e0e1b90463384ce46df4118f0ddc2ab65e5bb095b4234",
                                "name": "19 a 21 anos",
                                "value": "TEMPO_PRODUCAO_ARTESANATO.19_21_ANOS"
                            },
                            {
                                "id": "215e013d5736c8780ee24104d3ed235924ee9c6aa3def4e2a7085d151b0053da",
                                "name": "22 a 24 anos",
                                "value": "TEMPO_PRODUCAO_ARTESANATO.22_24_ANOS"
                            },
                            {
                                "id": "e3be749967f6db0f7b37a2008c5c46d73ff3ba83d709ade5cfab77d59dadc964",
                                "name": "25 a 27 anos",
                                "value": "TEMPO_PRODUCAO_ARTESANATO.25_27_ANOS"
                            },
                            {
                                "id": "dfdbdd280af01f74eacba4ba12b702af0d722c3579632a0ab4de8a2388582e0e",
                                "name": "28 a 30 anos",
                                "value": "TEMPO_PRODUCAO_ARTESANATO.28_30_ANOS"
                            }
                        ],
                        "alignment": true,
                        "alias": "TEMPO_PRODUCAO_ARTESANATO"
                    }
                },
                {
                    "id": "93e055ca8a0022d713a6353644adc886743a175f6db7764a5f08351880bc2973",
                    "name": "19) Qual a renda média mensal conseguida com o artesanato?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "394a9f9207611ed783d3352742087bc4675c2d6826ece51c495f001e1eaa79a3",
                            "type": "string",
                            "kind": "static",
                            "reference": "choice",
                            "label": "Choice",
                            "alias": "RENDA_MENSAL"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-multiple-choice",
                        "version": "1.0.2",
                        "choices": [
                            {
                                "id": "cf56f86a51e0d9dda5bb05a763457ca1a12170de8dce37e788c0d6883d032ce8",
                                "name": "Até 1/3 salário mínimo",
                                "value": "RENDA_MENSAL.MENOS_UM_TERCO_SALARIO_MINIMO"
                            },
                            {
                                "id": "f0c0bbf09c35cc5e42dae8936a0ea4fbee66a1599efcdbd0c437c854fa1735ca",
                                "name": "A partir de 1/3 a até ½ salário mínimo",
                                "value": "RENDA_MENSAL.ENTRE_UM_TERCO_E_MEIO_SALARIO_MINIMO"
                            },
                            {
                                "id": "2897d5675e09d178c2fbb3582e10282246af939b5c67ebe47b7754edd2f8f498",
                                "name": "A partir de 1/2 a até 1 salário mínimo",
                                "value": "RENDA_MENSAL.ENTRE_MEIO_SALARIO_E_UM_SALARIO_MINIMO"
                            },
                            {
                                "id": "44ec522ffece3a87c6fb8ecf6e26b10301dcaccc8ec96b29828e3f64a35313de",
                                "name": "A partir de 1 a até 2 salários mínimos",
                                "value": "RENDA_MENSAL.ENTRE_UM_E_DOIS_SALARIOS_MINIMOS"
                            },
                            {
                                "id": "1617502de05657702244a8e9b481c466dfd6e74d5073354dfef217ed9831d1a4",
                                "name": "A partir de 2 a até 3 salários mínimos",
                                "value": "RENDA_MENSAL.ENTRE_DOIS_E_TRES_SALARIOS_MINIMOS"
                            },
                            {
                                "id": "ff7dd762df1d330f4ddea789dc00182b2db8e89e62a83c4c376e9500ff9cee0a",
                                "name": "A partir de 3 a até 4 salários mínimos",
                                "value": "RENDA_MENSAL.ENTRE_TRES_E_QUATRO_SALARIOS_MINIMOS"
                            },
                            {
                                "id": "dfc937f5295a14795cef5ac166a63166e5044954568f6a148013146de1f9c1fb",
                                "name": "4 ou mais salários mínimos",
                                "value": "RENDA_MENSAL.QUATRO_OU_MAIS_SALARIOS_MINIMOS"
                            }
                        ],
                        "alias": "RENDA_MENSAL"
                    }
                },
                {
                    "id": "e4b956a50b183acecdd9daadc184ec2ec2378d6bfb45d4209a63346b9d9c200a",
                    "name": "20) Forma de trabalho?",
                    "nameVisible": true,
                    "description": "(Pode escolher mais de uma opção)",
                    "slots": [
                        {
                            "id": "f17cb98d40aaf437f5a247ec0234f5ac1c30a4f5baec93fd541ee8a89b35b5f0",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "b908bf8ed5060a63a6274286abc3dc96e381bc5d6c0e6063263811f67f8a6dd7",
                            "sequence": 0,
                            "label": "Choice",
                            "name": "Autônomo",
                            "alias": "TIPO_VINCULO_EMPREGATICIO.AUTONOMO",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "TIPO_VINCULO_EMPREGATICIO"
                            }
                        },
                        {
                            "id": "f8b0105ad27319f99c7dac8e622f4f7fc3ce72a65b416aaad314ff00d3022eea",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "b9492b51d87e678c2e4cf14eb82c3ebc10cbcedbb274daee56a92c07d0461982",
                            "sequence": 1,
                            "label": "Choice",
                            "name": "Cooperativa",
                            "alias": "TIPO_VINCULO_EMPREGATICIO.COOPERATIVA",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "TIPO_VINCULO_EMPREGATICIO"
                            }
                        },
                        {
                            "id": "0c877c5929e67ce8bb71a2d05fa362a63a43692624bf370a4131329ad60596e5",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "be542e271540dac48537fceeda9eca9da7d2590568df42ba3f09e3cc635977f6",
                            "sequence": 2,
                            "label": "Choice",
                            "name": "Contratado",
                            "alias": "TIPO_VINCULO_EMPREGATICIO.CONTRATADO",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "TIPO_VINCULO_EMPREGATICIO"
                            }
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-multiple-choice",
                        "version": "1.0.2",
                        "choices": [
                            {
                                "id": "b908bf8ed5060a63a6274286abc3dc96e381bc5d6c0e6063263811f67f8a6dd7",
                                "name": "Autônomo",
                                "value": "TIPO_VINCULO_EMPREGATICIO.AUTONOMO"
                            },
                            {
                                "id": "b9492b51d87e678c2e4cf14eb82c3ebc10cbcedbb274daee56a92c07d0461982",
                                "name": "Cooperativa",
                                "value": "TIPO_VINCULO_EMPREGATICIO.COOPERATIVA"
                            },
                            {
                                "id": "be542e271540dac48537fceeda9eca9da7d2590568df42ba3f09e3cc635977f6",
                                "name": "Contratado",
                                "value": "TIPO_VINCULO_EMPREGATICIO.CONTRATADO"
                            }
                        ],
                        "multiple": true,
                        "alias": "TIPO_VINCULO_EMPREGATICIO"
                    }
                },
                {
                    "id": "7b330c4f8ddce9d05c854a35c0613ba7f82b87e95313886ed210fdb1fef5bbfd",
                    "name": "21) Quanto tempo em média por semana se dedica ao artesanato?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "b374b28ccbbcc6c80afb89083ade801da6ce429990f1c4f5716a184d5826eea4",
                            "type": "string",
                            "kind": "static",
                            "reference": "choice",
                            "label": "Choice",
                            "alias": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-multiple-choice",
                        "version": "1.0.2",
                        "choices": [
                            {
                                "id": "edabd35f38e95e9f62ac6d11ba73d3aaa7918682a7a54efab81c7c860c53c648",
                                "name": "Até 4 horas/semana",
                                "value": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO.ATE_QUATRO_HORAS_SEMANA"
                            },
                            {
                                "id": "16ac98e1192c643ff6b29964b861bfe3f74bd768b99780b35fb2db4dba685210",
                                "name": "De 4 a 8 horas/semana",
                                "value": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO.ENTRE_QUATRO_E_8_HORAS_SEMANA"
                            },
                            {
                                "id": "d9369b42599d1d647b95c36e14f8b4822fe9f8ccfdc77acedd19fb2c56a9fff3",
                                "name": "De 9 a 12 horas/semana",
                                "value": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO.ENTRE_NOVE_E_DOZE_HORAS_SEMANA"
                            },
                            {
                                "id": "5aeee995b3852ed2b1a5d8023940273367615fbc00863e82af7ea8cfdfed9910",
                                "name": "De 13 a 16 horas/semana",
                                "value": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO.ENTRE_TREZE_E_DEZESSEIS_HORAS_SEMANA"
                            },
                            {
                                "id": "2795dc8f9dde8b438e7e7a78157374f9ef271444c4f9ae21654dc0c9e7c0a550",
                                "name": "De 17 a 20 horas/semana",
                                "value": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO.ENTRE_DEZESSETE_E_VINTE_HORAS_SEMANA"
                            },
                            {
                                "id": "bf747179793f82a8bd122f17625d175bbc85782a466f720ef049626c6fd56705",
                                "name": "De 21 a 24 horas/semana",
                                "value": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO.ENTRE_VINTE_UM_E_24_HORAS_SEMANA"
                            },
                            {
                                "id": "ce1b8a398ef132279f946d4aa5f2cfac0d1a8b8f938715d798901411e370b5ab",
                                "name": "De 25 a 28 horas/semana",
                                "value": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO.ENTRE_VINTE_E_CINCO_E_VINTE_OITO_HORAS_SEMANA"
                            },
                            {
                                "id": "e3f44806db2e5d9e515ee3837726444a4ad1d1e2372792f8caaa175aebc0d35c",
                                "name": "De 29 a 32 horas/semana"
                            },
                            {
                                "id": "55c058c5b412bf43e77af66d0ba8317e01b1def70e6edda945723f185d7e4899",
                                "name": "De 33 a 36 horas/semana",
                                "value": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO.ENTRE_TRINTA_E_TRES_E_TRINTA_E_SEIS_HORAS_SEMANA"
                            },
                            {
                                "id": "7509ed85553b45561c4084cf843ebd694cb54cfd2711ee06e670d926f7743fc0",
                                "name": "De 37 a 40 horas/semana",
                                "value": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO.ENTRE_TRINTA_E_SETE_E_QUARENTA_HORAS_SEMANA"
                            }
                        ],
                        "alignment": true,
                        "alias": "TEMPO_SEMANAL_DEDICACAO_ARTESANATO"
                    }
                },
                {
                    "id": "179f59f84dfbbce3b415f37f014ee7cd7743026a4797fae3a0373bd25c2fb1fa",
                    "name": "22) Quanto à organização do modo de trabalho",
                    "nameVisible": true,
                    "description": "(local de produção e organização social do trabalho)\n(Pode escolher mais de uma opção)",
                    "slots": [
                        {
                            "id": "8561a3232d2ed554034207f256dc5f96c3ac781a09e6a047efa946df299dd3b8",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "7e38e2eaaf19d6d3e1175ccb2d2599ff2cd8024fc61cb0a4f420cf8c80048c9d",
                            "sequence": 0,
                            "label": "Choice",
                            "name": "Individualmente em atelier próprio",
                            "alias": "ORGANIZACAO_MODO_TRABALHO.INDIVIDUALMENTE_ATELIER_PROPRIO",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "ORGANIZACAO_MODO_TRABALHO"
                            }
                        },
                        {
                            "id": "e9c632756a255b3b9b3b2d2a355fd8323a7f0cdd94cd1f988ee72cbdcd9d025c",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "6339bdfb93d6ae915a6339f8df0388fb3be623267e6d557d3753c45159535092",
                            "sequence": 1,
                            "label": "Choice",
                            "name": "Individualmente em atelier coletivo",
                            "alias": "ORGANIZACAO_MODO_TRABALHO.INDIVIDUALMENTE_ATELIER_COLETIVO",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "ORGANIZACAO_MODO_TRABALHO"
                            }
                        },
                        {
                            "id": "8b0a40826dfe3b459708c7f5b34697ed29d3ebf4c7ab3f9eaab8ea6a0b908433",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "2287d79d3f97aeda3a9781793332e7f54cd0054e69d72a84b3be1a7ae4f0c041",
                            "sequence": 2,
                            "label": "Choice",
                            "name": "Individualmente em casa",
                            "alias": "ORGANIZACAO_MODO_TRABALHO.INDIVIDUALMENTE_EM_CASA",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "ORGANIZACAO_MODO_TRABALHO"
                            }
                        },
                        {
                            "id": "6fb75a3fe07d8fe4fb8376c16ec602a257078e94c2c24d7a11a38e2c85d09062",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "2470d777a09aecfc08fb98501efa01373eb270211fe87d42d13ad0326aab3de1",
                            "sequence": 3,
                            "label": "Choice",
                            "name": "Coletivamente em casa com família",
                            "alias": "ORGANIZACAO_MODO_TRABALHO.COLETIVAMENTE_EM_CASA_COM_FAMILIA",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "ORGANIZACAO_MODO_TRABALHO"
                            }
                        },
                        {
                            "id": "51e2de1600ca5669528a08b0b77a13332c18b91b6ff0cc1bf95dd2799ca3371b",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "0e05bcb0e9e4b20dacf5e44204f887c4e3e229f418576e9e57ae06ddfe780d18",
                            "sequence": 4,
                            "label": "Choice",
                            "name": "Coletivamente em associações/cooperativas",
                            "alias": "ORGANIZACAO_MODO_TRABALHO.COLETIVAMENTE_ASSOCIACOES_COOPERATIVAS",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "ORGANIZACAO_MODO_TRABALHO"
                            }
                        },
                        {
                            "id": "9666b3e90d1f4e2c3ad02b5f107baab7784f47310131d5e9df33619f6dc429ac",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "57df5ab97604251b43e49db47a3d5caa42e72a8153d4855660979d2a57ecd3a3",
                            "sequence": 5,
                            "label": "Choice",
                            "name": "Empresa própria",
                            "alias": "ORGANIZACAO_MODO_TRABALHO.EMPRESA_PROPRIA",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "ORGANIZACAO_MODO_TRABALHO"
                            }
                        },
                        {
                            "id": "a86567cc5d2752f5a68d5dd44fb201623f1050eb2e55707f68233f232bba9113",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "5fe575ee53dae6a0d479d25362eb8f04b799706957b09e9f5d5c89ec4c97555a",
                            "sequence": 6,
                            "label": "Choice",
                            "name": "Empresa privada",
                            "alias": "ORGANIZACAO_MODO_TRABALHO.EMPRESA_PRIVADA",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "ORGANIZACAO_MODO_TRABALHO"
                            }
                        },
                        {
                            "id": "a43cd37cdfb40900609f2866de161a154f39e73ecb11481ed7cbafb7f03d57d1",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "7068edb06c1a3b7659b5ec3c4a0760961edeb13e13d916973a7e2e7863217ba7",
                            "sequence": 7,
                            "label": "Choice",
                            "name": "Terceirização",
                            "alias": "ORGANIZACAO_MODO_TRABALHO.TERCEIRIZACAO",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "ORGANIZACAO_MODO_TRABALHO"
                            }
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-multiple-choice",
                        "version": "1.0.2",
                        "choices": [
                            {
                                "id": "7e38e2eaaf19d6d3e1175ccb2d2599ff2cd8024fc61cb0a4f420cf8c80048c9d",
                                "name": "Individualmente em atelier próprio",
                                "value": "ORGANIZACAO_MODO_TRABALHO.INDIVIDUALMENTE_ATELIER_PROPRIO"
                            },
                            {
                                "id": "6339bdfb93d6ae915a6339f8df0388fb3be623267e6d557d3753c45159535092",
                                "name": "Individualmente em atelier coletivo",
                                "value": "ORGANIZACAO_MODO_TRABALHO.INDIVIDUALMENTE_ATELIER_COLETIVO"
                            },
                            {
                                "id": "2287d79d3f97aeda3a9781793332e7f54cd0054e69d72a84b3be1a7ae4f0c041",
                                "name": "Individualmente em casa",
                                "value": "ORGANIZACAO_MODO_TRABALHO.INDIVIDUALMENTE_EM_CASA"
                            },
                            {
                                "id": "2470d777a09aecfc08fb98501efa01373eb270211fe87d42d13ad0326aab3de1",
                                "name": "Coletivamente em casa com família",
                                "value": "ORGANIZACAO_MODO_TRABALHO.COLETIVAMENTE_EM_CASA_COM_FAMILIA"
                            },
                            {
                                "id": "0e05bcb0e9e4b20dacf5e44204f887c4e3e229f418576e9e57ae06ddfe780d18",
                                "name": "Coletivamente em associações/cooperativas",
                                "value": "ORGANIZACAO_MODO_TRABALHO.COLETIVAMENTE_ASSOCIACOES_COOPERATIVAS"
                            },
                            {
                                "id": "57df5ab97604251b43e49db47a3d5caa42e72a8153d4855660979d2a57ecd3a3",
                                "name": "Empresa própria",
                                "value": "ORGANIZACAO_MODO_TRABALHO.EMPRESA_PROPRIA"
                            },
                            {
                                "id": "5fe575ee53dae6a0d479d25362eb8f04b799706957b09e9f5d5c89ec4c97555a",
                                "name": "Empresa privada",
                                "value": "ORGANIZACAO_MODO_TRABALHO.EMPRESA_PRIVADA"
                            },
                            {
                                "id": "7068edb06c1a3b7659b5ec3c4a0760961edeb13e13d916973a7e2e7863217ba7",
                                "name": "Terceirização",
                                "value": "ORGANIZACAO_MODO_TRABALHO.TERCEIRIZACAO"
                            }
                        ],
                        "multiple": true,
                        "alias": "ORGANIZACAO_MODO_TRABALHO"
                    }
                }
            ]
        },
        {
            "id": "11c545ef4849f75f69c9e8992023c66582580660a44aab90a2b41e224de22a35",
            "name": "Recebe algum tipo de apoio?",
            "nodes": [
                {
                    "id": "b4f4cc2789cc10ccc8f441811b33215195a3a1e2a08aebcb290cc411e8a8afc9",
                    "name": "23) O artesão recebe algum tipo de apoio?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "1b46dd6eaff015edc9ce82900bdffc2d22a22861514be6dd97813b1b375161eb",
                            "type": "string",
                            "kind": "static",
                            "reference": "answer",
                            "label": "Answer",
                            "alias": "RECEBE_ALGUM_APOIO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-yes-no",
                        "version": "1.0.4"
                    }
                }
            ],
            "branches": [
                {
                    "id": "e7b42e691da174f489d930925b64620afbbea6161cfb9f0638abc86c48a4fb3c",
                    "clusters": [
                        {
                            "id": "fe689170012899ea304db6f79209cd11213c6933bc2dd4839efdb0edecaea928",
                            "nodes": [
                                {
                                    "id": "fc5513385e8a65e0bc2629d4865d74aa6d18705866ccbc8980f395feee9022bb",
                                    "name": "De onde vem o apoio ?",
                                    "nameVisible": true,
                                    "description": "(Pode escolher mais de uma opção)",
                                    "slots": [
                                        {
                                            "id": "b1f36a9af1412138ab0a7654e20b23be0a743b2874f9bbf19509b1f69fafddc1",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "13af7d7ac9477e399b01d804afeb1b701d8c60695b8b24e0a38bab011c902915",
                                            "sequence": 0,
                                            "label": "Choice",
                                            "name": "Público / Institucional",
                                            "alias": "RECEBE_ALGUM_APOIO.PUBLICO_INSTITUCIONAL",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name"
                                            }
                                        },
                                        {
                                            "id": "f3280eb56e29c2baf8395f252bbb32f255a18f639a2eb64b7f23b58282f92cb8",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "7633135a5c357f4372d0d079f534c2964797e862d0136d9df97445983687c834",
                                            "sequence": 1,
                                            "label": "Choice",
                                            "name": "Privado",
                                            "alias": "RECEBE_ALGUM_APOIO.PRIVADO",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name"
                                            }
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-multiple-choice",
                                        "version": "1.0.2",
                                        "choices": [
                                            {
                                                "id": "13af7d7ac9477e399b01d804afeb1b701d8c60695b8b24e0a38bab011c902915",
                                                "name": "Público / Institucional",
                                                "value": "RECEBE_ALGUM_APOIO.PUBLICO_INSTITUCIONAL"
                                            },
                                            {
                                                "id": "7633135a5c357f4372d0d079f534c2964797e862d0136d9df97445983687c834",
                                                "name": "Privado",
                                                "value": "RECEBE_ALGUM_APOIO.PRIVADO"
                                            }
                                        ],
                                        "multiple": true
                                    }
                                }
                            ]
                        },
                        {
                            "id": "de33e4a3497dcb69e1b1a473ef663ff6ff40b02a1bbdc857881eca498d08a610",
                            "nodes": [
                                {
                                    "id": "7bccc8971d4a1c5618b58351f3f4785083c79c7aec258f042f11352c68092585",
                                    "name": "23.1) De quem o artesão recebe este tipo de apoio ?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "91f3dd1fb6fa4fc7395c4adcdcfc12b903f6b22a12cc204cd91a2fb0e1a90c05",
                                            "type": "text",
                                            "kind": "static",
                                            "reference": "value",
                                            "label": "Text",
                                            "alias": "RECEBE_ALGUM_TIPO_APOIO.NOME_ORIGEM_APOIO"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-text",
                                        "version": "2.0.0"
                                    }
                                },
                                {
                                    "id": "a5f9ec2b001d832d9ab992d301ce701a2600ed437e75bffa41ff993682cd1ac4",
                                    "name": "23.2) Qual tipo de apoio ?",
                                    "nameVisible": true,
                                    "description": "(Pode escolher mais de uma opção)",
                                    "slots": [
                                        {
                                            "id": "ad76d8604a70717da1bb4a45c7b45cfc3fc436d77bdbcbcdaa205505c1da87b6",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "f56f8c2a1b56cbce759074000b4c6aa51b0fca9c9d7a146d6092aadaa2dfbb75",
                                            "sequence": 0,
                                            "label": "Choice",
                                            "name": "Financeiro",
                                            "alias": "RECEBE_ALGUM_APOIO.TIPO_APOIO.FINANCEIRO",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "RECEBE_ALGUM_TIPO_APOIO.TIPO_APOIO"
                                            }
                                        },
                                        {
                                            "id": "2990530f2a676712fa530d97b99859ebfdd9a06feeef5091b849f510114a5eee",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "084d5c699254fe9837403c229e49f4c32d929e91fa7e527ec4c8f985c067d300",
                                            "sequence": 1,
                                            "label": "Choice",
                                            "name": "Técnico",
                                            "alias": "RECEBE_ALGUM_APOIO.TIPO_APOIO.TECNICO",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "RECEBE_ALGUM_TIPO_APOIO.TIPO_APOIO"
                                            }
                                        },
                                        {
                                            "id": "42c0f17e6f143363ce93275188569edbf6c5593dfc8e9b0ffb7a26d3c1d1c5cf",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "5a751659fac912ab639ff346f240ee30e6fe3192a3b168cbfeb2654dcaa6fc07",
                                            "sequence": 2,
                                            "label": "Choice",
                                            "name": "Cultural",
                                            "alias": "RECEBE_ALGUM_APOIO.TIPO_APOIO.CULTURAL",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "RECEBE_ALGUM_TIPO_APOIO.TIPO_APOIO"
                                            }
                                        },
                                        {
                                            "id": "64c39a1ce854f21907a9ebb0675ed7d871abdf8f990dabfcc111b11a5082b2d0",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "343ebb3a6c3dc9baeb96c336338c31ef1779a83b4d87d33710afe6f07ec50ac3",
                                            "sequence": 3,
                                            "label": "Choice",
                                            "name": "Distribuição",
                                            "alias": "RECEBE_ALGUM_APOIO.TIPO_APOIO.DISTRIBUICAO",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "RECEBE_ALGUM_TIPO_APOIO.TIPO_APOIO"
                                            }
                                        },
                                        {
                                            "id": "9b2a64a77ab60240c4382030297d5617a0be8b0a537a98827321f7efdca3ac7c",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "d4485f66bb4d00532bd1542061629838a4f6bbb49b2dc981483ff4c3443cc06c",
                                            "sequence": 4,
                                            "label": "Choice",
                                            "name": "Formação / atualização",
                                            "alias": "RECEBE_ALGUM_APOIO.APOIO_ATUALIZACAO",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "RECEBE_ALGUM_TIPO_APOIO.TIPO_APOIO"
                                            }
                                        },
                                        {
                                            "id": "74897c178d0d5d0d870e9083400e739b3123d1fb874692a602fd3dea107b9546",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "1e8c923984f3c1b2b9c0d4fd19dfc3f364456dc9c472a879961c73f0ea1039b3",
                                            "sequence": 5,
                                            "label": "Choice",
                                            "name": "Promoção e vendas / Marketing",
                                            "alias": "RECEBE_ALGUM_APOIO.PROMOCAO_VENDAS_MARKETING",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "RECEBE_ALGUM_TIPO_APOIO.TIPO_APOIO"
                                            }
                                        },
                                        {
                                            "id": "62b92b1a85aaec5aba11b00cc0f027994673f61e799207e829c559318f7e6900",
                                            "type": "boolean",
                                            "kind": "dynamic",
                                            "reference": "57b275e260a37cb84f4cfcf4af6eacb668e18f735a6efe98774b4fdf5a4a8f1d",
                                            "sequence": 6,
                                            "label": "Choice",
                                            "name": "Outros",
                                            "alias": "RECEBE_ALGUM_APOIO.OUTROS",
                                            "pipable": {
                                                "group": "Choice",
                                                "label": "Choice",
                                                "template": "name",
                                                "alias": "RECEBE_ALGUM_TIPO_APOIO.TIPO_APOIO"
                                            }
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-multiple-choice",
                                        "version": "1.0.2",
                                        "choices": [
                                            {
                                                "id": "f56f8c2a1b56cbce759074000b4c6aa51b0fca9c9d7a146d6092aadaa2dfbb75",
                                                "name": "Financeiro",
                                                "value": "RECEBE_ALGUM_APOIO.TIPO_APOIO.FINANCEIRO"
                                            },
                                            {
                                                "id": "084d5c699254fe9837403c229e49f4c32d929e91fa7e527ec4c8f985c067d300",
                                                "name": "Técnico",
                                                "value": "RECEBE_ALGUM_APOIO.TIPO_APOIO.TECNICO"
                                            },
                                            {
                                                "id": "5a751659fac912ab639ff346f240ee30e6fe3192a3b168cbfeb2654dcaa6fc07",
                                                "name": "Cultural",
                                                "value": "RECEBE_ALGUM_APOIO.TIPO_APOIO.CULTURAL"
                                            },
                                            {
                                                "id": "343ebb3a6c3dc9baeb96c336338c31ef1779a83b4d87d33710afe6f07ec50ac3",
                                                "name": "Distribuição",
                                                "value": "RECEBE_ALGUM_APOIO.TIPO_APOIO.DISTRIBUICAO"
                                            },
                                            {
                                                "id": "d4485f66bb4d00532bd1542061629838a4f6bbb49b2dc981483ff4c3443cc06c",
                                                "name": "Formação / atualização",
                                                "value": "RECEBE_ALGUM_APOIO.APOIO_ATUALIZACAO"
                                            },
                                            {
                                                "id": "1e8c923984f3c1b2b9c0d4fd19dfc3f364456dc9c472a879961c73f0ea1039b3",
                                                "name": "Promoção e vendas / Marketing",
                                                "value": "RECEBE_ALGUM_APOIO.PROMOCAO_VENDAS_MARKETING"
                                            },
                                            {
                                                "id": "57b275e260a37cb84f4cfcf4af6eacb668e18f735a6efe98774b4fdf5a4a8f1d",
                                                "name": "Outros",
                                                "value": "RECEBE_ALGUM_APOIO.OUTROS"
                                            }
                                        ],
                                        "multiple": true,
                                        "alignment": true,
                                        "alias": "RECEBE_ALGUM_TIPO_APOIO.TIPO_APOIO"
                                    }
                                }
                            ],
                            "branches": [
                                {
                                    "id": "36f3ad59f941213300414b3b85ca904cafb2344a3c07f0a57b95215eba1c2e88",
                                    "clusters": [
                                        {
                                            "id": "7bc4c57d3b7774b59241d5c63ed03d3fd750c6ebd1b4453c72ce8add61744333",
                                            "nodes": [
                                                {
                                                    "id": "bda5dd7a7ac3b61923a606fb6f7b3d8784acf49ae7b94d7fe76d3db15b7075ef",
                                                    "name": "23.2.1) Qual outro tipo de apoio ?",
                                                    "nameVisible": true,
                                                    "slots": [
                                                        {
                                                            "id": "5b20aa2ddeb05e493d522e0595ac84437e487c07da5e27a049a75f15801e74bd",
                                                            "type": "text",
                                                            "kind": "static",
                                                            "reference": "value",
                                                            "label": "Text",
                                                            "alias": "RECEBE_ALGUM_APOIO.OUTROS.QUAL_OUTRO_TIPO_APOIO"
                                                        }
                                                    ],
                                                    "block": {
                                                        "type": "tripetto-block-text",
                                                        "version": "2.0.0"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "id": "474c57632d2d74fdc26b663d6d08c4be99e5e3d4b51e9135ee499faa4fd1d0f9",
                                            "block": {
                                                "choice": "57b275e260a37cb84f4cfcf4af6eacb668e18f735a6efe98774b4fdf5a4a8f1d",
                                                "type": "tripetto-block-multiple-choice",
                                                "version": "0.0.0",
                                                "node": "a5f9ec2b001d832d9ab992d301ce701a2600ed437e75bffa41ff993682cd1ac4",
                                                "slot": "62b92b1a85aaec5aba11b00cc0f027994673f61e799207e829c559318f7e6900"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "271530b687b8ba61ae4bd1617b95e6907b54f7ae536ec3e186b80182b3850c77",
                            "block": {
                                "type": "tripetto-block-yes-no:yes",
                                "version": "0.0.0",
                                "node": "b4f4cc2789cc10ccc8f441811b33215195a3a1e2a08aebcb290cc411e8a8afc9",
                                "slot": "1b46dd6eaff015edc9ce82900bdffc2d22a22861514be6dd97813b1b375161eb"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "288b228443fcbd102e83bc0705ca541a007f8a1939848d6b94c2ea947a3a4fd5",
            "name": "A quem se destina seus produtos?",
            "nodes": [
                {
                    "id": "c5d2a1719f4732cb624e2168e2a198c806d99dd9ec6bd64a81d4ffc53f5ab2b3",
                    "name": "24) Os produtos se destinam à população de Uberlândia e Região com ponto de venda físico?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "8fe9ea9f96f40c982cec32f6caac1771e41b43c2a1f3811976ff127f1983d5da",
                            "type": "string",
                            "kind": "static",
                            "reference": "answer",
                            "label": "Answer",
                            "alias": "PRODUTOS_DESTINAM_POPULACAO_UBERLANDIA_REGIAO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-yes-no",
                        "version": "1.0.4"
                    }
                }
            ],
            "branches": [
                {
                    "id": "d1c5f89786f0195d61704392a7d7118968ab49ee0535dfa5cf8252cbbe104908",
                    "name": "Uberlândia e região",
                    "clusters": [
                        {
                            "id": "9888ccdbe3d5b7752c7fa5ae78e18b383c0ddb79c8178cb6d798d5b650715a81",
                            "nodes": [
                                {
                                    "id": "176096d3757e9513b55eb08c7e64036f9346f521369b8e775b1e3fa65135db88",
                                    "name": "24.1) Como é divulgado ?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "6563b946a79f944b3fad9976fb454ceb1f1b4b4918886ad386b82b236315b6c2",
                                            "type": "string",
                                            "kind": "static",
                                            "reference": "choice",
                                            "label": "Choice",
                                            "alias": "PRODUTOS_DESTINAM_POPULACAO_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-multiple-choice",
                                        "version": "1.0.2",
                                        "choices": [
                                            {
                                                "id": "58c77b08d61c16c897b992056ad17012adff8af420155c824682fc8bdc4a484d",
                                                "name": "Feiras de artesanato",
                                                "value": "PRODUTOS_DESTINAM_POPULACAO_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.FEIRAS_ARTESANATO"
                                            },
                                            {
                                                "id": "604deff2ead2fd2de2599eafba7edfb505d289395cac699c08eaaeb5b79231d0",
                                                "name": "Feiras gerais",
                                                "value": "PRODUTOS_DESTINAM_POPULACAO_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.FEIRAS_GERAIS"
                                            },
                                            {
                                                "id": "b6a2f92de69d4877dfc522bc33f0922c7f24cc093002c73478490e7062d4654e",
                                                "name": "Eventos e/ou festas culturais em Uberlândia",
                                                "value": "PRODUTOS_DESTINAM_POPULACAO_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.EVENTOS_FESTAS_CULTURAIS_UBERLANDIA"
                                            },
                                            {
                                                "id": "5215597989bf2a467dcd009010b69278a4f45a723c7f51f63129b8a19ed75804",
                                                "name": "Lojas",
                                                "value": "PRODUTOS_DESTINAM_POPULACAO_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.LOJAS"
                                            },
                                            {
                                                "id": "64039628b8b034cf44ac61d7ce2eaa2e7fb8e7f9cfaf0c15a475eae89369b15b",
                                                "name": "Outros",
                                                "value": "PRODUTOS_DESTINAM_POPULACAO_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.OUTROS"
                                            }
                                        ],
                                        "alias": "PRODUTOS_DESTINAM_POPULACAO_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS"
                                    }
                                }
                            ],
                            "branches": [
                                {
                                    "id": "c4921fc33dff5cd14fd6abe7e89d28bb358bef43c73efc0fc54d3fc3a128539b",
                                    "clusters": [
                                        {
                                            "id": "e64e7ee134aad6ef9b2b6a0989b9cf1e5d12b687c424b182edffebc85f8c4725",
                                            "nodes": [
                                                {
                                                    "id": "3db38f55fd47e4dbd0298f56193146f17d58f6fa896ab256f9387de6c7936ff6",
                                                    "name": "24.1.1) Qual outra forma de divulgação para a população de Uberlândia e Região com ponto de venda físico?",
                                                    "nameVisible": true,
                                                    "slots": [
                                                        {
                                                            "id": "0ebb483939bf3d36e57022b432905c167378f113296ad11950c3122b2174efc4",
                                                            "type": "text",
                                                            "kind": "static",
                                                            "reference": "value",
                                                            "label": "Text",
                                                            "alias": "PRODUTOS_DESTINAM_POPULACAO_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.OUTROS.NOME_OUTRA_FORMA_DIVULGACAO"
                                                        }
                                                    ],
                                                    "block": {
                                                        "type": "tripetto-block-text",
                                                        "version": "2.0.0"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "id": "56f72f8690f82cba5945b569d4fd8f0a180367a2505abc91c3b7187085eca3fc",
                                            "block": {
                                                "choice": "64039628b8b034cf44ac61d7ce2eaa2e7fb8e7f9cfaf0c15a475eae89369b15b",
                                                "type": "tripetto-block-multiple-choice",
                                                "version": "0.0.0",
                                                "node": "176096d3757e9513b55eb08c7e64036f9346f521369b8e775b1e3fa65135db88",
                                                "slot": "6563b946a79f944b3fad9976fb454ceb1f1b4b4918886ad386b82b236315b6c2"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "3f6f0962d848067899bcb16a6fa658e9c1b56dc48b2ca82650cda79f895f70a1",
                            "block": {
                                "type": "tripetto-block-yes-no:yes",
                                "version": "0.0.0",
                                "node": "c5d2a1719f4732cb624e2168e2a198c806d99dd9ec6bd64a81d4ffc53f5ab2b3",
                                "slot": "8fe9ea9f96f40c982cec32f6caac1771e41b43c2a1f3811976ff127f1983d5da"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "7675e7249f6ef26acfff54ed97d8d6ff95e4730ea57772c3409821d9778c7c76",
            "name": "A quem se destina seus produtos?",
            "nodes": [
                {
                    "id": "138c27167bf85abbb5d5a99a128737be4581c30542d515229d3abcea8f8682d3",
                    "name": "25) Os produtos se destinam à turistas em Uberlândia e Região com ponto de venda físico ?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "a3c6e1844e56620c737b35eaeafd9d174301c0e418a66aba53047cc4cb00b5b8",
                            "type": "string",
                            "kind": "static",
                            "reference": "answer",
                            "label": "Answer",
                            "alias": "PRODUTOS_DESTINAM_TURISTAS_UBERLANDIA_REGIAO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-yes-no",
                        "version": "1.0.4"
                    }
                }
            ],
            "branches": [
                {
                    "id": "021abc8a20571aadac10d20b26486c062328b8b9843dc9010ce63f83a8c84161",
                    "name": "Uberlândia e região",
                    "clusters": [
                        {
                            "id": "e195fc6385b65f344acc13e9878139e6a2beb915d3bb38cda736e60c4dcdf926",
                            "nodes": [
                                {
                                    "id": "5b7e0b03c655ca8b548ff595beb74eb42a0dfb5758bd9c8c17a864b8d0653387",
                                    "name": "25.1) Como é divulgado ?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "44be1a481e9e33a41377ebdd3335da77697f7d2ff27b296dfaaf5e61d78b20da",
                                            "type": "string",
                                            "kind": "static",
                                            "reference": "choice",
                                            "label": "Choice",
                                            "alias": "PRODUTOS_DESTINAM_TURISTAS_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-multiple-choice",
                                        "version": "1.0.2",
                                        "choices": [
                                            {
                                                "id": "58c77b08d61c16c897b992056ad17012adff8af420155c824682fc8bdc4a484d",
                                                "name": "Feiras de artesanato",
                                                "value": "PRODUTOS_DESTINAM_TURISTAS_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.FEIRAS_ARTESANATO"
                                            },
                                            {
                                                "id": "604deff2ead2fd2de2599eafba7edfb505d289395cac699c08eaaeb5b79231d0",
                                                "name": "Feiras gerais",
                                                "value": "PRODUTOS_DESTINAM_TURISTAS_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.FEIRAS_GERAIS"
                                            },
                                            {
                                                "id": "b6a2f92de69d4877dfc522bc33f0922c7f24cc093002c73478490e7062d4654e",
                                                "name": "Eventos e/ou festas culturais em Uberlândia",
                                                "value": "PRODUTOS_DESTINAM_TURISTAS_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.EVENTOS_FESTAS_CULTURAIS_UBERLANDIA"
                                            },
                                            {
                                                "id": "5215597989bf2a467dcd009010b69278a4f45a723c7f51f63129b8a19ed75804",
                                                "name": "Lojas",
                                                "value": "PRODUTOS_DESTINAM_TURISTAS_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.LOJAS"
                                            },
                                            {
                                                "id": "64039628b8b034cf44ac61d7ce2eaa2e7fb8e7f9cfaf0c15a475eae89369b15b",
                                                "name": "Outros",
                                                "value": "PRODUTOS_DESTINAM_TURISTAS_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.OUTROS"
                                            }
                                        ],
                                        "alias": "PRODUTOS_DESTINAM_TURISTAS_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS"
                                    }
                                }
                            ],
                            "branches": [
                                {
                                    "id": "4ef47ed1a8fc105b21f84afde6ee7e61f887d50987d1095121fe169b2be2bcc7",
                                    "clusters": [
                                        {
                                            "id": "b1f2853822d625b6ae96303adcaf2f6df50c98e0588b272c86c6feca97134701",
                                            "nodes": [
                                                {
                                                    "id": "309a4b9f8259180d9aacd0d4a36cabac77a211febc08878a17c456716853c558",
                                                    "name": "25.1.1) Qual outra forma de divulgação para a população de Uberlândia e Região com ponto de venda físico?",
                                                    "nameVisible": true,
                                                    "slots": [
                                                        {
                                                            "id": "d30c368ef7423fde620e7e8f1fa89c78d9cc257eb2bbba44bd23fb000f94510a",
                                                            "type": "text",
                                                            "kind": "static",
                                                            "reference": "value",
                                                            "label": "Text",
                                                            "alias": "PRODUTOS_DESTINAM_TURISTAS_UBERLANDIA_REGIAO.FORMA_DIVULGACAO_PRODUTOS.OUTROS.NOME_OUTRA_FORMA_DIVULGACAO"
                                                        }
                                                    ],
                                                    "block": {
                                                        "type": "tripetto-block-text",
                                                        "version": "2.0.0"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "id": "ea225d01813aee88db38757b0e29f5bbc0804f618c37387f2d3ed8eb90d32bda",
                                            "block": {
                                                "choice": "64039628b8b034cf44ac61d7ce2eaa2e7fb8e7f9cfaf0c15a475eae89369b15b",
                                                "type": "tripetto-block-multiple-choice",
                                                "version": "0.0.0",
                                                "node": "5b7e0b03c655ca8b548ff595beb74eb42a0dfb5758bd9c8c17a864b8d0653387",
                                                "slot": "44be1a481e9e33a41377ebdd3335da77697f7d2ff27b296dfaaf5e61d78b20da"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "c94724199adebdff841e5198bd56dc8240f386ccbbe4a55814b6babf5f38365b",
                            "block": {
                                "type": "tripetto-block-yes-no:yes",
                                "version": "0.0.0",
                                "node": "138c27167bf85abbb5d5a99a128737be4581c30542d515229d3abcea8f8682d3",
                                "slot": "a3c6e1844e56620c737b35eaeafd9d174301c0e418a66aba53047cc4cb00b5b8"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "b6cfe5f9b9c688db179c7d782603a675cfc511ecd13d18d0994e520fc9b92901",
            "name": "A quem se destina seus produtos?",
            "nodes": [
                {
                    "id": "001f1f6f3402964123b08e5a38b3aa97455b4c2443a85f5cbc66b273a7516ebe",
                    "name": "26) Os produtos se destinam à exportação / mercado externo à Uberlândia e região ?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "ae605aa247f3a11efd5ba425a5adbfa329660fe5e06052fc4dcff64eccf20d04",
                            "type": "string",
                            "kind": "static",
                            "reference": "answer",
                            "label": "Answer",
                            "alias": "PRODUTOS_DESTINAM_EXPORTACAO_MERCADO_EXTERNO_UBERLANDIA_REGIAO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-yes-no",
                        "version": "1.0.4"
                    }
                }
            ],
            "branches": [
                {
                    "id": "0934faaa8d9be2c44c445894b63d2a0ca0161ced413fc7de86e8c27f51f5a4e7",
                    "name": "Uberlândia e região",
                    "clusters": [
                        {
                            "id": "ae0b156edbd8b6e8fe6446ed15558f47a81f5b23d6f99c80e03aa6f1a802fdd9",
                            "nodes": [
                                {
                                    "id": "682e7ba83b8acc0fdf281d60d55f1f0a6f35e7691c8e066119b73bb9c95a3577",
                                    "name": "26.1) Onde ?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "74db83ef923777a22fa4ee62ed5142e6cef8dbeb49a6a62ba7c86298a63ce0d3",
                                            "type": "text",
                                            "kind": "static",
                                            "reference": "value",
                                            "label": "Text",
                                            "alias": "PRODUTOS_DESTINAM_EXPORTACAO_MERCADO_EXTERNO_UBERLANDIA_REGIAO.ONDE"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-text",
                                        "version": "2.0.0"
                                    }
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "f7b2e020073c727a2b98d5ad7f868b9419d09863106eca40b157a236d91b0c24",
                            "block": {
                                "type": "tripetto-block-yes-no:yes",
                                "version": "0.0.0",
                                "node": "001f1f6f3402964123b08e5a38b3aa97455b4c2443a85f5cbc66b273a7516ebe",
                                "slot": "ae605aa247f3a11efd5ba425a5adbfa329660fe5e06052fc4dcff64eccf20d04"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "63eedb46d3e7455e1b8aa620c2b79084fd47802a93341cbf8d8370c7e4163732",
            "name": "A quem se destina seus produtos?",
            "nodes": [
                {
                    "id": "831e51f8007bd88b4e195f27b869bf213deeb83d7313a68417a3b519b3a6026e",
                    "name": "27) Os produtos se destinam à lojas online (e-commerce) ?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "e78ab00a79297ea5fb0054b94939f431a3eaad12c273101f2659fdb42fe22453",
                            "type": "string",
                            "kind": "static",
                            "reference": "answer",
                            "label": "Answer",
                            "alias": "PRODUTOS_DESTINAM_LOJAS_ONLINE"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-yes-no",
                        "version": "1.0.4"
                    }
                }
            ],
            "branches": [
                {
                    "id": "5435ea5bdc47edc4fab89770b3f1876d88c9c0ce634d27ba755e894be306da9e",
                    "name": "Uberlândia e região",
                    "clusters": [
                        {
                            "id": "fa914dc568526e6f861f22ec2f2a63a04581578c94997210ef5ef4b5411a6713",
                            "nodes": [
                                {
                                    "id": "81c64a85d076c4c04dac1bc2a8d20366fee994c8b68f03d80b052f0d36be92d7",
                                    "name": "27.1) Onde ?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "c74b5f8be86364030d1f557328ace90adaccf3a184e6899c0b23df6d8a9a64b6",
                                            "type": "text",
                                            "kind": "static",
                                            "reference": "value",
                                            "label": "Text",
                                            "alias": "PRODUTOS_DESTINAM_LOJAS_ONLINE.ONDE"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-text",
                                        "version": "2.0.0"
                                    }
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "42d34587a635a2b6035eaab929ab245e0a68584bad845ae6bec19da856d78a35",
                            "block": {
                                "type": "tripetto-block-yes-no:yes",
                                "version": "0.0.0",
                                "node": "831e51f8007bd88b4e195f27b869bf213deeb83d7313a68417a3b519b3a6026e",
                                "slot": "e78ab00a79297ea5fb0054b94939f431a3eaad12c273101f2659fdb42fe22453"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "e9d06dbfca670982e9fe60f05c69a62da3574ec54b8efb33457eff52314de99c",
            "name": "A quem se destina seus produtos?",
            "nodes": [
                {
                    "id": "a2d71bd26553343caafbf4d26a5fbd8507fcb91efd46bb409a12e57f40630db3",
                    "name": "28) Os produtos se destinam à anúncios on line: facebook, e-mail, Twiter, instagram, etc ?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "03398991e8d6687b33dd629bc11c44e16d011cb9c947785e7f6e4fb7172bf8ee",
                            "type": "string",
                            "kind": "static",
                            "reference": "answer",
                            "label": "Answer",
                            "alias": "PRODUTOS_DESTINAM_ANUNCIOS_ONLINE"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-yes-no",
                        "version": "1.0.4"
                    }
                }
            ],
            "branches": [
                {
                    "id": "e5759664e3018321ca6998b22c1c9d196d43279f4a935d387dded3a5cb68e619",
                    "name": "Uberlândia e região",
                    "clusters": [
                        {
                            "id": "228ead7fc83c49188589fa2af6d509023b7e7656b0947ec32ae68dd9c3ff62f3",
                            "nodes": [
                                {
                                    "id": "583717a6aa237ade62a8fa3b4329faf62c521e0e7324ccfff0eb60bcdd20c278",
                                    "name": "28.1) Onde ?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "3291fefa31515ae24d49eb3ada57a0ea87cf0ab8d3f9891a3bac0e15778f5a6e",
                                            "type": "text",
                                            "kind": "static",
                                            "reference": "value",
                                            "label": "Multi-line text",
                                            "alias": "PRODUTOS_DESTINAM_ANUNCIOS_ONLINE.ONDE"
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-textarea",
                                        "version": "2.0.0"
                                    }
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "31368540130a5ec4c4f3d2f9607937b35caa871bedadcc008d17e29ab0dadc14",
                            "block": {
                                "type": "tripetto-block-yes-no:yes",
                                "version": "0.0.0",
                                "node": "a2d71bd26553343caafbf4d26a5fbd8507fcb91efd46bb409a12e57f40630db3",
                                "slot": "03398991e8d6687b33dd629bc11c44e16d011cb9c947785e7f6e4fb7172bf8ee"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "296adafb5eedc52b5d55d06df2235ef29822f3ff4e5571854607c3b9b0b4c72c",
            "nodes": [
                {
                    "id": "5555ec9673216303f9d6b5d76d6bc9403f04581e2987f5dfb71cb9270cf12acb",
                    "name": "29) Os produtos se destinam à amigos e família ?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "27ac32d0705d77771080a888aa730c2b26a03a9dd2d276852ea79ca6826a1ce9",
                            "type": "string",
                            "kind": "static",
                            "reference": "answer",
                            "label": "Answer",
                            "alias": "PRODUTOS_DESTINAM_AMIGOS_FAMILIA"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-yes-no",
                        "version": "1.0.4"
                    }
                },
                {
                    "id": "fd04808d06edf6ce2054402296b8b298727586d8d22fdc18dcb039746a76c326",
                    "name": "30) Porque você se tornou artesão?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "bfb1a4379a30bfacf67acf46aaf6b2359617af51777b567f61606dc02f401bb3",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Multi-line text",
                            "alias": "MOTIVO_TORNOU_ARTESAO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-textarea",
                        "version": "2.0.0"
                    }
                }
            ]
        },
        {
            "id": "e348ac8c8de3911fd35c1fce7455fb5705da6c8f4ac56b5935c93f12c9218291",
            "nodes": [
                {
                    "id": "43906ff655995d4bbd88d744a7f4dd8340b1f2ebabcfaacf7259be221e936ec6",
                    "name": "Parte B: Artesanato",
                    "nameVisible": true
                },
                {
                    "id": "7a5d21e5fd4c873bc7a67e3dc83987e172b89f09296ef4d800159035c8ccd053",
                    "name": "31) O que produz ?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "aeec6b287a707d7b213fea6f377e6dac06cc0047ce951695c138812b5ef8c0dd",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "bddef480888d1ac4749e88b6d91daad92c6643cdee4ec25c36edb9d35edd116b",
                            "sequence": 0,
                            "label": "Choice",
                            "name": "Utilitário",
                            "alias": "PRODUCOES_ARTESAO.UTILITARIO",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "PRODUCOES_ARTESAO"
                            }
                        },
                        {
                            "id": "b0c2f3a1a713961ceb441b75cd6fb667d21aa2db783b3d56690261cbd540ff46",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "dac0717190f925fc208988c427ae9132d713be57aa9261086969ece4c3a1bd5e",
                            "sequence": 1,
                            "label": "Choice",
                            "name": "Decorativo",
                            "alias": "PRODUCOES_ARTESAO.DECORATIVO",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "PRODUCOES_ARTESAO"
                            }
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-multiple-choice",
                        "version": "1.0.2",
                        "choices": [
                            {
                                "id": "bddef480888d1ac4749e88b6d91daad92c6643cdee4ec25c36edb9d35edd116b",
                                "name": "Utilitário",
                                "value": "PRODUCOES_ARTESAO.UTILITARIO"
                            },
                            {
                                "id": "dac0717190f925fc208988c427ae9132d713be57aa9261086969ece4c3a1bd5e",
                                "name": "Decorativo",
                                "value": "PRODUCOES_ARTESAO.DECORATIVO"
                            }
                        ],
                        "multiple": true,
                        "alias": "PRODUCOES_ARTESAO"
                    }
                },
                {
                    "id": "c2dee4465f6ffdc9242056403ce7da9e0b8d8b1b6d7a22dcd6fc389dbd96b269",
                    "name": "32) Nomear o(s) objeto(s) de maior produção:",
                    "nameVisible": true,
                    "description": "(Separar cada objeto por linha)",
                    "slots": [
                        {
                            "id": "a9c48d9151b0e3648b91c9f24217b6deff5f743f6368e727a322bc6ed2f35c39",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Multi-line text",
                            "alias": "OBJETOS_MAIOR_PRODUCAO"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-textarea",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "cde17c25bcf03cc13a0ed133ce2d428c45c2c41db5ac386fffeb85c3f6edf80f",
                    "name": "33) De onde vem a inspiração para a criação desse objeto?",
                    "nameVisible": true,
                    "description": "(Pode escolher mais de uma opção)",
                    "slots": [
                        {
                            "id": "ba9d816df8d6eb69a3e18e668d77dc0adcb3886395466284963bfb8791c59871",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "453bf30340018bd5db14ded74e8264e1fe9e28d4f46b649a40c876da5d72c885",
                            "sequence": 0,
                            "label": "Choice",
                            "name": "Criação individual contemporânea",
                            "alias": "INSPIRACAO_PRODUCAO.CRIACAO_INDIVIDUAL_CONTEMPORANEA",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "INSPIRACAO_PRODUCAO"
                            }
                        },
                        {
                            "id": "9317fee85e2b3a0a25654e9ac3901d1b62a86a4ecc602b7307c2071aa97bc724",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "89dac16e8cfe9a34b3dd45eb0fe0bd4960345bc18c72c8cd4f329127fcbb1a77",
                            "sequence": 1,
                            "label": "Choice",
                            "name": "Criação coletiva contemporânea",
                            "alias": "INSPIRACAO_PRODUCAO.CRIACAO_COLETIVA_CONTEMPORANEA",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "INSPIRACAO_PRODUCAO"
                            }
                        },
                        {
                            "id": "d5b562ec83360799f092a67b5ff2645f6bf806962a51359f1b85a6bbc1a136f3",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "a53e2d5352c1e412f3774efd10eb9c035d1eb8e44f78e9399afbcb84f0dde3c5",
                            "sequence": 2,
                            "label": "Choice",
                            "name": "Reprodução de um modelo tradicional",
                            "alias": "INSPIRACAO_PRODUCAO.REPRODUCAO_MODELO_TRADICIONAL",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "INSPIRACAO_PRODUCAO"
                            }
                        },
                        {
                            "id": "dcc4fc8d98fad6c8ec841ab8b38d684b869cd2526e28b18c26e6785307af6d86",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "f6c309a9edde0a9903e6cdf0b5beb618a16e4bf07838bfc75b3a72a2b9b59327",
                            "sequence": 3,
                            "label": "Choice",
                            "name": "Transformação e adaptação de um modelo tradicional",
                            "alias": "INSPIRACAO_PRODUCAO.TRANSFORMACAO_ADAPTACAO_MODELO_TRADICIONAL",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "INSPIRACAO_PRODUCAO"
                            }
                        },
                        {
                            "id": "3266149956a93d395035a2433078a73914934ec522cc4e2e9542149ad9f54bc2",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "6c95c744c24ad710bcd2180992ed8560fc22a8d58fdcc937ddfeb69c2906e5ea",
                            "sequence": 4,
                            "label": "Choice",
                            "name": "Cultura local / Característica regional",
                            "alias": "INSPIRACAO_PRODUCAO.CULTURA_LOCAL_CARACTERISTICA_REGIONAL",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "INSPIRACAO_PRODUCAO"
                            }
                        },
                        {
                            "id": "08e216aec892be16590837d81751b452241151e1628367034fdd1f665125ac28",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "34f3a437a2da974482821e687473c51e9c90a1ace69d8564e4cc46fa0b9feefc",
                            "sequence": 5,
                            "label": "Choice",
                            "name": "Material local",
                            "alias": "INSPIRACAO_PRODUCAO.MATERIAL_LOCAL",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "INSPIRACAO_PRODUCAO"
                            }
                        },
                        {
                            "id": "216a793bec14e4df43d0570a9b280832f8268f01d7a8d5aba3df286ae4b3038a",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "8a5e5e816d302be4172ceed2fe554adcf1137967b37796247cff773f615aea77",
                            "sequence": 6,
                            "label": "Choice",
                            "name": "Necessidade / demanda local",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "INSPIRACAO_PRODUCAO"
                            }
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-multiple-choice",
                        "version": "1.0.2",
                        "choices": [
                            {
                                "id": "453bf30340018bd5db14ded74e8264e1fe9e28d4f46b649a40c876da5d72c885",
                                "name": "Criação individual contemporânea",
                                "value": "INSPIRACAO_PRODUCAO.CRIACAO_INDIVIDUAL_CONTEMPORANEA"
                            },
                            {
                                "id": "89dac16e8cfe9a34b3dd45eb0fe0bd4960345bc18c72c8cd4f329127fcbb1a77",
                                "name": "Criação coletiva contemporânea",
                                "value": "INSPIRACAO_PRODUCAO.CRIACAO_COLETIVA_CONTEMPORANEA"
                            },
                            {
                                "id": "a53e2d5352c1e412f3774efd10eb9c035d1eb8e44f78e9399afbcb84f0dde3c5",
                                "name": "Reprodução de um modelo tradicional",
                                "value": "INSPIRACAO_PRODUCAO.REPRODUCAO_MODELO_TRADICIONAL"
                            },
                            {
                                "id": "f6c309a9edde0a9903e6cdf0b5beb618a16e4bf07838bfc75b3a72a2b9b59327",
                                "name": "Transformação e adaptação de um modelo tradicional",
                                "value": "INSPIRACAO_PRODUCAO.TRANSFORMACAO_ADAPTACAO_MODELO_TRADICIONAL"
                            },
                            {
                                "id": "6c95c744c24ad710bcd2180992ed8560fc22a8d58fdcc937ddfeb69c2906e5ea",
                                "name": "Cultura local / Característica regional",
                                "value": "INSPIRACAO_PRODUCAO.CULTURA_LOCAL_CARACTERISTICA_REGIONAL"
                            },
                            {
                                "id": "34f3a437a2da974482821e687473c51e9c90a1ace69d8564e4cc46fa0b9feefc",
                                "name": "Material local",
                                "value": "INSPIRACAO_PRODUCAO.MATERIAL_LOCAL"
                            },
                            {
                                "id": "8a5e5e816d302be4172ceed2fe554adcf1137967b37796247cff773f615aea77",
                                "name": "Necessidade / demanda local"
                            }
                        ],
                        "multiple": true,
                        "alias": "INSPIRACAO_PRODUCAO"
                    }
                },
                {
                    "id": "7a899af5f0e5bacb98f64887ef5a19bed15c1461a3978c96b97e35bccc38408e",
                    "name": "34) Motivação da criação e produção:",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "3ff174e85a1c4d166e29e7100caa1bdd268f9a411f807a1ac34a2c2a38cd8fec",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "e35415a16f4a8afd1c60d00d8cefd0d773d1a82f67f02040e7e5c897758cc556",
                            "sequence": 0,
                            "label": "Choice",
                            "name": "Intuitiva com fins de realização artística pessoal",
                            "alias": "MOTIVACAO_PRODUCAO.INTUITIVA_FINS_REALIZACAO_ARTISTICA_PESSOAL",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "MOTIVACAO_PRODUCAO"
                            }
                        },
                        {
                            "id": "bcb0c1d0960fbc5be4fbd2d4ba7499f0cae86c677ed7fbead34f6a40cd32a4dd",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "6f60633c9b9cf0f8808440504c2e5263979abedfd515b76b919daa390cfa0017",
                            "sequence": 1,
                            "label": "Choice",
                            "name": "Prospecção de demandas do mercado",
                            "alias": "MOTIVACAO_PRODUCAO.PROSPECCAO_DEMANDAS_MERCADO",
                            "pipable": {
                                "group": "Choice",
                                "label": "Choice",
                                "template": "name",
                                "alias": "MOTIVACAO_PRODUCAO"
                            }
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-multiple-choice",
                        "version": "1.0.2",
                        "choices": [
                            {
                                "id": "e35415a16f4a8afd1c60d00d8cefd0d773d1a82f67f02040e7e5c897758cc556",
                                "name": "Intuitiva com fins de realização artística pessoal",
                                "value": "MOTIVACAO_PRODUCAO.INTUITIVA_FINS_REALIZACAO_ARTISTICA_PESSOAL"
                            },
                            {
                                "id": "6f60633c9b9cf0f8808440504c2e5263979abedfd515b76b919daa390cfa0017",
                                "name": "Prospecção de demandas do mercado",
                                "value": "MOTIVACAO_PRODUCAO.PROSPECCAO_DEMANDAS_MERCADO"
                            }
                        ],
                        "multiple": true,
                        "alias": "MOTIVACAO_PRODUCAO"
                    }
                },
                {
                    "id": "ecaf5e9162f95a75ed8fa63be73cdd43f876a248335f43b7cfb3a6ec53e7b21b",
                    "name": "Parte C: Materiais e técnicas",
                    "nameVisible": true
                },
                {
                    "id": "2b098a9ff417da98dc8741fb5fc6a273c176c375f84317401e8519086bbc4e6d",
                    "name": "35) Quais materiais utiliza?",
                    "nameVisible": true,
                    "description": "(Separar cada material por linha)\nQuem estiver entrevistando, deve motivar o entrevistado a falar um por um.",
                    "slots": [
                        {
                            "id": "731769becc6995e04a60e0b081771cfbfc4d660c1bce8be63703bd40aded115e",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Multi-line text",
                            "alias": "TIPOS_MATERIAIS"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-textarea",
                        "version": "2.0.0"
                    }
                },
                {
                    "id": "0817c783a392ad8d1a8e08bbbdccd6a43f4a6b34178f74c3361b2cb2099d3608",
                    "name": "36) Como você constrói as peças?",
                    "nameVisible": true,
                    "description": "Tentar motivar o entrevistado a falar do início ao fim o que é feito e registrar cada um dos processos/técnicas.",
                    "slots": [
                        {
                            "id": "b956e9cd23b37015a525cf359b7404edfc3b090fa9650b0cb789bed79b636e9c",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Multi-line text",
                            "alias": "MODO_CONSTRUCAO_PECAS"
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-textarea",
                        "version": "2.0.0"
                    }
                }
            ]
        }
    ],
    "editor": {
        "name": "tripetto",
        "version": "1.9.7"
    }
};
