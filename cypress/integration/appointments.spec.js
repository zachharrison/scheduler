describe("Appointments", () => {

  beforeEach(() => {
    // RESET THE DATABASE EACH TIME WE RUN TESTS
    cy.request("GET", "/api/debug/reset");
    
    // VISIT HOME PAGE AND VERIFY THAT THE DATA IS BEING RENDERED FROM API
    cy.visit("/");
    cy.contains("Monday");

  });
 
  it("should book an interview", () => {
    // GET SECOND ADD BUTTON AND CLICK
    cy.get("[alt=Add]")
    .first()
    .click();
    
    // GET FORM INPUT FIELD AND TYPE NAME
    cy.get("[data-testid=student-name-input]")
    .type("Lydia Miller-Jones");

    // SELECT INTERIVEWER BY ALT TEXT AND CLICK
    cy.get('[alt="Sylvia Palmer"]')
    .click();

    // CLICK THE SAVE BUTTON IN FORM
    cy.contains("Save")
    .click();

    // VERIFY THAT THE STUDENT NAME AND INTERVIEWER NAME ARE SHOWING ON PAGE
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");

  });

  it('should edit an interview', () => {

    // SHOW THE EDIT BUTTON AND CLICK
    cy.get("[alt=Edit]")
    .invoke('show')
    .click()

    // GET FORM INPUT FIELD, CLEAR TEXT AND TYPE NEW NAME
    cy.get("[data-testid=student-name-input]")
    .clear()
    .type("Joe Smith")

    // SELECT INTERIVEWER BY ALT TEXT AND CLICK
    cy.get('[alt="Tori Malcolm"]')
    .click();

    // CLICK THE SAVE BUTTON IN FORM
    cy.contains("Save")
    .click();

    // VERIFY THAT THE STUDENT NAME AND INTERVIEWER NAME ARE SHOWING ON PAGE
    cy.contains(".appointment__card--show", "Joe Smith");
    cy.contains(".appointment__card--show", "Tori Malcolm");

  });

  it("should cancel an interview", () => {

    cy.get("[alt=Delete]")
    .click({ force: true });

    cy.contains("Confirm").click();

    cy.contains("Deleting")
    .should("exist");

    cy.contains("Deleting")
    .should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen")
    .should("not.exist");
  });

});