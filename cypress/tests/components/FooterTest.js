import FooterComponent from "../../models/components/FooterComponent";

describe('Footer Component Test', () => {
    
    let footerComp;
    beforeEach(() => {
        cy.visit('/');
        footerComp = new FooterComponent();
    })

    it('Test for about us column', () => {
      const expectedAboutUsData = {
        header: "About Us",
        desc: "We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality."
      }
      footerComp.getAboutUsData().then(actualAboutUsData => {
          cy.wrap('').then(() => {
            expect(actualAboutUsData).to.eql(expectedAboutUsData);
          })
      });
    });

    it('Test for contact us column',   () => {
      const expectedContactUsData = {
        header: "Get in Touch",
        address: "2390 El Camino",
        phone: "+440 123456",
        email: "demo@blazemeter.com"
      }
      footerComp.getContactUsData().then(contactUsData => {
        cy.log(JSON.stringify(contactUsData));
          cy.wrap('').then(() => {
            expect(contactUsData.header).to.equal(expectedContactUsData.header);
            expect(contactUsData.desc).to.contains(expectedContactUsData.address);
            expect(contactUsData.desc).to.contains(expectedContactUsData.phone);
            expect(contactUsData.desc).to.contains(expectedContactUsData.email);
          })
      });
    });
    });