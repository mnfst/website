import { Template } from '../../../../types/template.interface'

export const templates: Template[] = [
  {
    id: 1,
    name: 'Backend for Contact Form',
    slug: 'contact-form-api',
    excerpt: 'A ready-to-use backend for handling contact form submissions',
    description:
      'This template provides a complete backend solution for processing contact form submissions. It includes email validation, spam filtering, and configurable email notifications. The API supports custom fields and can be easily integrated with any frontend framework.',

    gitHubOwner: 'brunobuddy',
    gitHubSlug: 'contact-form-manifest-template',
    gitHubAvatar: 'https://avatars.githubusercontent.com/u/6626184?v=4',
    tags: ['Contact Form', 'API', 'Email', 'Contact submission'],
    features: ['Email validation', 'Policies', 'Validation'],
    useCases: ['CMS', 'Contact form'],
    diagram: 'contact-form-db-diagram.png',
    apiDoc: {
      openapi: '3.1.0',
      info: {
        title: 'Contact Form ✉️',
        version: '0.0.1'
      },
      paths: {
        '/api/collections/contacts': {
          get: {
            summary: 'List contacts',
            description:
              'Retrieves a paginated list of contacts. In addition to the general parameters below, each property of the contact can be used as a filter: https://manifest.build/docs/rest-api#filters',
            tags: ['Contacts'],
            parameters: [
              {
                name: 'page',
                in: 'query',
                description: 'The page number',
                required: false,
                schema: {
                  type: 'integer',
                  default: 1
                }
              },
              {
                name: 'perPage',
                in: 'query',
                description: 'The number of items per page',
                required: false,
                schema: {
                  type: 'integer',
                  default: 10
                }
              },
              {
                name: 'orderBy',
                in: 'query',
                description: 'The field to order by',
                required: false,
                schema: {
                  type: 'string'
                }
              },
              {
                name: 'order',
                in: 'query',
                description: 'The order direction',
                required: false,
                schema: {
                  type: 'string',
                  enum: ['ASC', 'DESC']
                }
              },
              {
                name: 'relations',
                in: 'query',
                description:
                  'The relations to include. For several relations, use a comma-separated list',
                required: false,
                schema: {
                  type: 'string'
                }
              }
            ],
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/Paginator'
                    }
                  }
                }
              }
            }
          },
          post: {
            summary: 'Create a new contact',
            description:
              'Creates a new contact passing the properties in the request body as JSON.',
            tags: ['Contacts'],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object'
                  }
                }
              }
            },
            responses: {
              '201': {
                description: 'OK'
              },
              '400': {
                description: 'Bad request'
              }
            }
          }
        },
        '/api/collections/contacts/select-options': {
          get: {
            summary: 'List contacts for select options',
            description:
              "Retrieves a list of contacts for select options. The response is an array of objects with the properties 'id' and 'label'.",
            tags: ['Contacts'],
            responses: {
              '200': {
                description: 'List of contacts for select options',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/SelectOption'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        '/api/collections/contacts/{id}': {
          get: {
            summary: 'Get a single contact',
            description: 'Retrieves the details of a single contact by its ID.',
            tags: ['Contacts'],
            parameters: [
              {
                name: 'id',
                in: 'path',
                description: 'The ID of the contact',
                required: true,
                schema: {
                  type: 'integer'
                }
              }
            ],
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object'
                    }
                  }
                }
              },
              '404': {
                description: 'The contact was not found'
              }
            }
          },
          put: {
            summary: 'Update an existing contact (full replace)',
            description:
              'Updates a single contact by its ID. The properties to update are passed in the request body as JSON. This operation fully replaces the entity and its relations. Leaving a property out will remove it.',
            tags: ['Contacts'],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object'
                  }
                }
              }
            },
            parameters: [
              {
                name: 'id',
                in: 'path',
                description: 'The ID of the contact',
                required: true,
                schema: {
                  type: 'integer'
                }
              }
            ],
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object'
                    }
                  }
                }
              },
              '404': {
                description: 'Not found'
              }
            }
          },
          patch: {
            summary: 'Update an existing contact (partial update)',
            description:
              'Updates a single contact by its ID. The properties to update are passed in the request body as JSON. This operation partially updates the entity and its relations. Leaving a property out will not remove it.',
            tags: ['Contacts'],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object'
                  }
                }
              }
            },
            parameters: [
              {
                name: 'id',
                in: 'path',
                description: 'The ID of the contact',
                required: true,
                schema: {
                  type: 'integer'
                }
              }
            ],
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object'
                    }
                  }
                }
              },
              '404': {
                description: 'Not found'
              }
            }
          },
          delete: {
            summary: 'Delete an existing contact',
            description: 'Deletes a single contact by its ID.',
            tags: ['Contacts'],
            parameters: [
              {
                name: 'id',
                in: 'path',
                description: 'The ID of the contact',
                required: true,
                schema: {
                  type: 'integer'
                }
              }
            ],
            responses: {
              '200': {
                description: 'OK'
              },
              '404': {
                description: 'The contact was not found'
              }
            }
          }
        },
        '/api/manifest': {
          get: {
            summary: 'Get the manifest',
            description: 'Retrieves the manifest of the application.',
            tags: ['Manifest'],
            security: [
              {
                Admin: []
              }
            ],
            responses: {
              '200': {
                description: 'The manifest of the application.',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/AppManifest'
                    }
                  }
                }
              },
              '403': {
                description: 'Forbidden',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        message: {
                          type: 'string'
                        },
                        error: {
                          type: 'string'
                        },
                        statusCode: {
                          type: 'number'
                        }
                      }
                    },
                    example: {
                      message: 'Forbidden resource',
                      error: 'Forbidden',
                      statusCode: 403
                    }
                  }
                }
              }
            }
          }
        },
        '/api/manifest/entities/contacts': {
          get: {
            summary: 'Get the contact manifest',
            description:
              'Retrieves the manifest of the contact entity with all its properties.',
            tags: ['Manifest'],
            security: [
              {
                Admin: []
              }
            ],
            responses: {
              '200': {
                description: 'The manifest of the contact entity.',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/EntityManifest'
                    }
                  }
                }
              },
              '403': {
                description: 'Forbidden',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        message: {
                          type: 'string'
                        },
                        error: {
                          type: 'string'
                        },
                        statusCode: {
                          type: 'number'
                        }
                      }
                    },
                    example: {
                      message: 'Forbidden resource',
                      error: 'Forbidden',
                      statusCode: 403
                    }
                  }
                }
              }
            }
          }
        },
        '/api/auth/admins/login': {
          post: {
            summary: 'Login as a admin',
            description: 'Logs in as a admin.',
            tags: ['Auth'],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      email: {
                        type: 'string'
                      },
                      password: {
                        type: 'string'
                      }
                    },
                    required: ['email', 'password']
                  },
                  example: {
                    email: 'example@manifest.build',
                    password: 'password'
                  }
                }
              }
            },
            responses: {
              '200': {
                description: 'Successful login',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        token: {
                          type: 'string'
                        }
                      }
                    },
                    example: {
                      token: '12345'
                    }
                  }
                }
              },
              '400': {
                description: 'Bad request',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: {
                          type: 'number'
                        },
                        message: {
                          type: 'array',
                          items: {
                            type: 'string'
                          }
                        },
                        error: {
                          type: 'string'
                        }
                      }
                    },
                    example: {
                      message: ['password should not be empty'],
                      statusCode: 400,
                      error: 'Bad Request'
                    }
                  }
                }
              },
              '401': {
                description: 'Invalid credentials',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: {
                          type: 'number'
                        },
                        message: {
                          type: 'string'
                        }
                      }
                    },
                    example: {
                      message: 'Invalid email or password',
                      statusCode: 401
                    }
                  }
                }
              }
            }
          }
        },
        '/api/auth/admins/me': {
          get: {
            summary: 'Get current admin',
            description: 'Get current admin.',
            tags: ['Auth'],
            security: [
              {
                Admin: []
              }
            ],
            responses: {
              '200': {
                description: 'Successful request',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'number'
                        },
                        email: {
                          type: 'string'
                        }
                      }
                    },
                    example: {
                      id: 1,
                      email: 'user@example.com'
                    }
                  }
                }
              },
              '403': {
                description: 'Forbidden',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: {
                          type: 'number'
                        },
                        message: {
                          type: 'string'
                        },
                        error: {
                          type: 'string'
                        }
                      }
                    },
                    example: {
                      message: 'Forbidden resource',
                      error: 'Forbidden',
                      statusCode: 403
                    }
                  }
                }
              }
            }
          }
        }
      },
      components: {
        schemas: {
          Paginator: {
            type: 'object',
            properties: {
              data: {
                type: 'array',
                items: {
                  type: 'object'
                }
              },
              currentPage: {
                type: 'integer'
              },
              lastPage: {
                type: 'integer'
              },
              from: {
                type: 'integer'
              },
              to: {
                type: 'integer'
              },
              total: {
                type: 'integer'
              },
              perPage: {
                type: 'integer'
              }
            }
          },
          SelectOption: {
            type: 'object',
            properties: {
              id: {
                type: 'number'
              },
              label: {
                type: 'string'
              }
            }
          },
          AppManifest: {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              },
              entities: {
                type: 'object',
                additionalProperties: {
                  $ref: '#/components/schemas/EntityManifest'
                }
              }
            }
          },
          EntityManifest: {
            type: 'object',
            properties: {
              className: {
                type: 'string'
              },
              nameSingular: {
                type: 'string'
              },
              namePlural: {
                type: 'string'
              },
              slug: {
                type: 'string'
              },
              mainProp: {
                type: 'string'
              },
              seedCount: {
                type: 'number'
              },
              belongsTo: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/RelationshipManifest'
                }
              },
              properties: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/PropertyManifest'
                }
              }
            }
          },
          RelationshipManifest: {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              },
              entity: {
                type: 'string'
              },
              eager: {
                type: 'boolean'
              }
            }
          },
          PropertyManifest: {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              },
              type: {
                type: 'string'
              }
            }
          }
        },
        securitySchemes: {
          Admin: {
            type: 'http',
            scheme: 'bearer',
            name: 'Admin auth',
            bearerFormat: 'JWT',
            description:
              'Authentication for Admin entity. Use POST /auth/admins/login to get a token.'
          }
        }
      }
    },
    repo: {
      createdAt: '2025-04-02T08:32:48Z',
      description: 'Simple contact form template with Manifest',
      license: 'MIT License',
      name: 'contact-form-manifest-template',
      url: 'https://github.com/brunobuddy/contact-form-manifest-template',
      owner: {
        avatar: 'https://avatars.githubusercontent.com/u/6626184?v=4',
        login: 'brunobuddy',
        profileUrl: 'https://github.com/brunobuddy'
      },
      content: {
        manifestFileContent: `name: Contact Form ✉️
entities:
  Contact:
    properties:
      - { name: name, validation: { required: true } }
      - { name: email, type: email, validation: { required: true } }
      - { name: phone }
      - { name: message, type: text, validation: { required: true } }
    policies:
      read:
        - access: admin
      create:
        - access: public
      update:
        - access: admin
      delete:
        - access: admin`,
        handlers: [],
        packageJsonContent: {
          templateVersion: '0.1.0',
          dependencies: [
            {
              name: 'manifest',
              version: '^4.11.2'
            }
          ]
        }
      }
    }
  },
  {
    id: 2,
    name: 'Portfolio backend template',
    slug: 'portfolio-api',
    excerpt: 'A ready-to-use backend for personal portfolios',
    description:
      'This template provides a ready-to-use Manifest backend for a personal portfolio. It includes:<ul><li>Manage your projects dynamically</li><li>Automatic generation of multiple image sizes upon upload</li><li>Storage dedicated to your portfolio visuals</li><li>A simple contact form</li></ul>',
    gitHubOwner: 'SebConejo',
    gitHubSlug: 'Portfolio-backend-template',
    gitHubAvatar: 'https://avatars.githubusercontent.com/u/11723962?v=4',
    tags: [
      'Portfolio',
      'Contact Form',
      'API',
      'Email',
      'Projects',
      'Contact submission',
      'Image upload',
      'Storage'
    ],
    features: ['Storage', 'Validation'],
    useCases: ['Portfolio', 'CMS', 'Blog'],
    diagram: 'contact-form-db-diagram.png',
    repo: {
      createdAt: '2025-04-02T12:46:13Z',
      description: null,
      license: 'MIT License',
      name: 'Portfolio-backend-template',
      url: 'https://github.com/brunobuddy/contact-form-manifest-template',
      owner: {
        avatar: 'https://avatars.githubusercontent.com/u/11723962?v=4',
        login: 'SebConejo',
        profileUrl: 'https://github.com/SebConejo'
      },
      content: {
        manifestFileContent: `name: Personal portfolio
entities:
  Project:
    properties:
      - { name: title, validation: { required: true } }
      - { name: excerpt, validation: { required: true } }
      - role
      - { name: date, type: date }
      - { name: url, type: link }
      - {
          name: photo,
          type: image,
          options:
            {
              sizes:
                {
                  small: { height: 403, width: 805 },
                  social: { height: 630, width: 1200 },
                  large: { height: 806, width: 1610 },
                },
            },
        }
      - { name: description, type: richText }
      - seoTitle
      - seoDescription

  Contacts:
    properties:
      - { name: name, type: string, validation: { required: true } }
      - { name: email, type: email, validation: { required: true } }
      - { name: message, type: text, validation: { required: true } }
`,
        handlers: [],
        packageJsonContent: {
          templateVersion: '0.1.0',
          dependencies: [
            {
              name: 'manifest',
              version: '^4.11.2'
            }
          ]
        }
      }
    }
  },
  {
    id: 3,
    name: 'Backend for feature voting tool',
    slug: 'feature-voting-tool',
    excerpt:
      'A feature voting tool backend / API inspired by Fider or Product Hunt',
    description:
      'This template provides a backend solution for a feature voting tool. It allows users to submit and vote on features, providing a simple API for managing feature requests.',
    gitHubOwner: 'brunobuddy',
    gitHubSlug: 'feature-voting-tool-manifest-template',
    gitHubAvatar: 'https://avatars.githubusercontent.com/u/6626184?v=4',
    tags: ['Feature', 'Voting', 'Fide', 'Product Hunt', 'Upvote', 'Submit'],
    features: ['Endpoints'],
    useCases: ['Community', 'Feedback', 'Product'],
    diagram: 'contact-form-db-diagram.png',
    repo: {
      createdAt: '2025-04-02T12:46:02Z',
      description:
        'A template for a feature voting tool inspired by https://github.com/getfider/fider',
      license: 'MIT License',
      name: 'feature-voting-tool-manifest-template',
      url: 'https://github.com/brunobuddy/feature-voting-tool-manifest-template',
      owner: {
        avatar: 'https://avatars.githubusercontent.com/u/6626184?v=4',
        login: 'brunobuddy',
        profileUrl: 'https://github.com/brunobuddy'
      },
      content: {
        manifestFileContent: `name: Feature voting tool 🥇
entities:
  Feature:
    properties:
      - { name: title }
      - { name: description, type: text }
      - { name: votes, type: number }
      - { name: createdAt, type: date }
      - {
          name: status,
          type: choice,
          options: { values: ["open", "in progress", "closed"] },
        }

  Comment:
    properties:
      - author
      - { name: content, type: text }
      - { name: createdAt, type: date }
    belongsTo:
      - Feature

endpoints:
  upvote:
    path: /features/:id/upvote
    method: PATCH
    description: Upvote a feature (increment the votes count)
    handler: upvoteFeature
`,
        handlers: [
          {
            name: 'upvoteFeature.js',
            content: `module.exports = async (req, res, manifest) => {
  const featureId = req.params.id;
  const feature = await manifest.from("features").findOneById(featureId);

  console.log("Feature ID:", featureId);
  console.log("Feature Data:", feature);

  if (!feature) {
    return res.status(404).json({ error: "Feature not found" });
  }

  await manifest.from("features").patch(featureId, {
    votes: feature.votes + 1,
  });

  res.status(200).json({
    message: "Feature upvoted successfully",
    feature: {
      ...feature,
      votes: feature.votes + 1,
    },
  });
};
`
          }
        ],
        packageJsonContent: {
          templateVersion: '0.1.0',
          dependencies: [
            {
              name: 'manifest',
              version: '^4.11.2'
            }
          ]
        }
      }
    }
  }
]
