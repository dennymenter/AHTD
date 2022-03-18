<!-- First script tag is to call API -->
<!-- learned from this video: https://netninja.dev/courses/sveltekit-tutorial/lectures/36982381 -->

<!-- endpoint: https://jsonplaceholder.typicode.com/posts -->

<script context="module">

    export async function load ({ fetch }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
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
