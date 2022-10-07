This is configuration that allows to run ghost-network locally

> Despite the fact this configuration name contains "local", it requires azure service bus and azure blob storage to be deployed.
> 
> I'm working on make it fully local

1. create azure resources from template using "Custom deployment"
2. add azure service bus and azure blob storage connection strings to `.env` file
3. run `docker compose up`
