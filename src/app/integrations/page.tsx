import { Integration } from '@/types/integration'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/Card'

async function getIntegrations() {
  const integrationsDirectory = path.join(process.cwd(), 'content/integrations')
  const filenames = fs.readdirSync(integrationsDirectory)

  const integrations = filenames.map((filename) => {
    const filePath = path.join(integrationsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    return data as Integration
  })

  return integrations
}

export default async function IntegrationsPage() {
  const integrations = await getIntegrations()

  const integrationsByType = integrations.reduce((acc, integration) => {
    if (!acc[integration.type]) {
      acc[integration.type] = []
    }
    acc[integration.type].push(integration)
    return acc
  }, {} as Record<string, typeof integrations>)

  return (
    <div className="section">
      <div className="container">
        <h1 className="title is-2 mb-6">Integrations</h1>

        {Object.entries(integrationsByType).map(([type, typeIntegrations]) => (
          <div key={type} className="mb-6">
            <h2 className="title is-4 mb-4">{type}</h2>
            <div className="columns is-multiline">
              {typeIntegrations.map((integration) => (
                <div key={integration.slug} className="column is-one-third">
                  <Link
                    href={`/integrations/${integration.slug}`}
                    className="box"
                  >
                    <Card className="box">
                      <CardHeader>
                        <div className="mb-4">
                          <figure className="image is-48x48">
                            <Image
                              src={integration.logo}
                              alt={`${integration.title} logo`}
                              width={48}
                              height={48}
                              className="rounded"
                            />
                          </figure>
                        </div>
                        <CardTitle>{integration.name}</CardTitle>
                        <CardDescription>{integration.excerpt}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
