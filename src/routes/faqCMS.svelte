<!-- First script tag is to call API -->
<!-- learned from this video: https://netninja.dev/courses/sveltekit-tutorial/lectures/36982381 -->



<script context="module">


    export async function load ({ fetch }) {
        const response = await fetch('https://api-eu-west-2.graphcms.com/v2/cl072jsru0z0p01z3e6nye6i6/master')
        const faqs = await response.json()

        console.log (faqs)

        if (response.ok) {

            return {
                props: {
                    faqs: faqs
                }   
            }
        }

        console.log("error")

        return {
            status: response.status,
            error: new Error('error encountered - could not fetch faqs')
        }

    }
    
</script>


<script>
    export let faqs
</script>


<!-- gonna loop through faqs here  -->

<div>
    {#each faqs as faq}
        <p><b>{faq.title}</b></p>        
        <p>{faq.body}</p>   
    {/each}
</div>



<h1>Got here - FAQ</h1>
