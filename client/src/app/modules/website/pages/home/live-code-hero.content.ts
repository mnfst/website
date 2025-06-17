export const liveCodeHeroContent: {
  label: string
  content: string
  demoUrl?: string
}[] = [
  {
    label: 'Collections',
    content: `name: Pokemon app 🐣

entities:
  Pokemon 🐉:
    properties:
      - name
      - {
          name: type,
          type: choice,
          options: { values: [Fire, Water, Grass, Electric] },
        }
      - { name: level, type: number }
    belongsTo:
      - Trainer

  Trainer 🧑‍🎤:
    properties:
      - name
      - { name: isChampion, type: boolean }`,
    demoUrl: 'https://demo-collections.manifest.build'
  },
  {
    label: 'Singles',
    content: `name: Corporate website 🌐

entities:
  Homepage:
    single: true
    properties:
      - { name: title, type: string }
      - { name: description, type: richText }
      - { name: coverImage, type: image }

  Footer:
    single: true
    properties:
      - { name: githubLink, type: link }
      - { name: linkedinLink, type: link }
      - { name: copyright, type: string }
      `,
    demoUrl: 'https://demo-singles.manifest.build'
  },
  {
    label: 'Relations',
    content: `name: Basketball League 🏀

entities:
  Player 🤾:
    properties:
      - name
    belongsTo:
      - Team

  Team 👥:
    properties:
      - name

  Fixture 🏟️:
    properties:
      - { name: homeScore, type: number }
      - { name: awayScore, type: number }
    belongsTo:
      - { name: homeTeam, entity: Team }
      - { name: awayTeam, entity: Team }`,
    demoUrl: 'https://demo-relations.manifest.build'
  },
  {
    label: 'Auth',
    content: `name: Invoice Management System 🗂️

entities:
  User 👩🏻‍💼:
    authenticable: true

  Accountant 👔:
    authenticable: true

  Invoice 🧾:
    properties:
      - number
      - { name: amount, type: money, options: { currency: "EUR" } }
    policies:
      create:
        - { access: restricted, allow: Accountant }
      read:
        - { access: restricted, allow: [Accountant, User] }
      update:
        - access: admin
      delete:
        - access: forbidden`,
    demoUrl: 'https://demo-auth.manifest.build'
  },
  {
    label: 'Validation',
    content: `name: Newsletter sign up form 🗒️

entities:
  Subscriber 💎:
    properties:
      - name
      - { name: email, type: email }
      - { name: subscriptionDate, type: date }
    validation:
      name: { minLength: 3 }
      email: { required: true, contains: "@company.com" }`,
    demoUrl: 'https://demo-validation.manifest.build'
  },
  {
    label: 'Storage',
    content: `name: Job recruitment app 💼

entities:
  UserProfile 👤:
    properties:
      - name
      - { name: email, type: email }
      - { name: linkedIn profile, type: link }
      - { name: resume, type: file }
      - {
          name: profilePicture,
          type: image,
          options:
            {
              sizes:
                {
                  standard: { height: 256, width: 256 },
                  thumbnail: { height: 64, width: 64 },
                },
            },
        }`,
    demoUrl: 'https://demo-storage.manifest.build'
  },
  {
    label: 'Webhooks',
    content: `name: HR Management System 🏢

entities:
  
  Employee:
    properties:
      - name
      - position
    hooks:
      beforeCreate:
        - { url: 'https://my-webhook.com/' }
      afterDelete:
        - { 
            url: 'https://another-webhook.com',
            headers: { authorization: 'Bearer \${API_KEY}' }
          }
        - { url: 'https://my-webhook.com', method: 'PATCH' }`
  },
  {
    label: 'Endpoints',
    content: `name: Task Management Application

entities:
  Task:
    properties:
      - title
      - description
      - { name: isCompleted, type: boolean }
      - { name: upvotes, type: number }

endpoints:
  upvoteTask:
    path: /tasks/:id/upvote
    method: POST
    handler: upvoteTask`
  }
]
