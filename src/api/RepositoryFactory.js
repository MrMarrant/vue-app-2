import countryRepository from './countryRepository.js'

const repositories = {
    country : countryRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
}
