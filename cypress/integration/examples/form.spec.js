describe("Form", () => {
    beforeEach(() => cy.visit("https://demoqa.com/automation-practice-form"));

    it.only("fills and comparing form", () => {
        const customer = {
            firstName: "Bruno",
            lastName: "Santos",
            email: "bruno@gmail.com",
            mobile: "9999999999",
            subjects: "Ola Mundo",
            address: "Hello Word",
            state: "NCR{enter}",
            city: "Delhi{enter}",
        };
        cy.fillsForm(customer);

        cy.get("#example-modal-sizes-title-lg").should("contain","Thanks for submitting the form");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[1]/td[2]').should("contain","Bruno Santos");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[2]/td[2]').should("contain","bruno@gmail.com");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[3]/td[2]').should("contain","Other");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[4]/td[2]').should("contain","9999999999");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[5]/td[2]').should("contain","20 May,2021");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[7]/td[2]').should("contain","Sports, Reading, Music");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[9]/td[2]').should("contain","Hello Word");
    });
});