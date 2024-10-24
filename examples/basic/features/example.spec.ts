import { loadFeature, describeFeature } from '@amiceli/vitest-cucumber'

const feature = await loadFeature('./example.feature')

describeFeature(feature, ({ Scenario }) => {
    Scenario('Run unit tests', ({ Given, When, Then, And }) => {
        Given('I have installed vitest-cucumber', () => {})
        And('I have a feature like "example.feature"', () => {})
        When('I run vitest-cucumber', () => {})
        Then('My feature file is parsed', () => {})
        And('I can test my scenarios', () => {})
    })
})