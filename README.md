# fem-payapi-mpa

This is a solution to the [PayAPI multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/payapi-multipage-website-FDLR1Y11e). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Notes

(Finished August 17th, 2022)

I didn’t go into this project expecting to have much trouble, and I was mostly right. At least, I never ran into any of the unrelenting existential crises posed by some of the previous challenges I’ve worked on, which made for a nice change of pace. What the project *did* have was a relatively wide scope of page contexts, each with its own set of edge cases to consider. Rather than posing one or two major roadblocks, this was more a test of endurance in solving a longer string of minor challenges.

I’ve spent my last few FEM projects working toward a final “go-to” stack of technologies to use (including Vite, TailwindCSS, and Svelte), and I continued that here by adding in Cypress for E2E testing. Since this project was going to be light on Javascript, I decided to use Astro instead of plain Vite.

Unfortunately, my environment-configuration skills weren’t quite up to the task of configuring *five* different tools at once (Astro, Vite, Svelte, Storybook, Tailwind), most of which have “convenient” one-command setups and which expect to be the center of your universe once installed. I ultimately dropped Storybook and Svelte in favor of a (somewhat ad-hoc) component testing strategy using Cypress.

As mentioned above, the site itself came together fairly easily once I managed to stop fighting with my toolchain. The hardest component to implement was probably the mobile navigation with its werid, four-dimensional background circle. I look forward to submitting this project and taking a look at some other solutions, since I’m not at all happy with the concessions I made in order to make mine work.

One important lesson I learned had to do with the various SVG illustrations on the index page: if you’re going to inline SVGs, particularly those using the `<defs>` element, make sure all of its ids are *globally unique*, since the SVGs can see each other once you’ve stuck them into the same markup. Equivalently, if some part of some SVG is inexplicably blurry, cropped, or otherwise mangled, there’s a good chance it’s borrowing an effect or path element from a neighboring graphic. It’s a good idea to check for this error *first* before spending two hours debugging a graphic by hand, which is a lesson I won’t be forgetting any time soon.

A live version of this site can be found [here](https://amorse-fem-payapi.netlify.app/).