Feature: use vitest-cucumber with vitest
    Scenario: Run unit tests
        Given I have installed vitest-cucumber
        And   I have a feature like "example.feature"
        When  I run vitest-cucumber
        Then  My feature file is parsed
        And   I can test my scenarios