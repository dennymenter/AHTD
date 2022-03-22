

    <p style="margin-top: 10px; border-bottom: solid">some testing with columns</p>


    <p>Bootstrap</p>
    <p>Problem with BS is that all columns are same width</p>
    <p>nowrap doesn't work because then it bleeds into the next column</p>

    <div class="row border" style="justify-content: center">
        <div class="col-lg-1 border">Hi</div>
        <div class="col-lg-1 border">
            <p>This is a very long entry for a column</p>
            <p class="text-nowrap">This is a very long entry for a column xxxxxxx xxxxxxxxxx xxxxxxxxxx</p>
        </div>
        <div class="col-lg-1 border">TEST</div>
        <div class="col-lg-1 border">TEST</div>
        <div class="col-lg-1 border">TEST</div>
        <div class="col-lg-1 border">TEST</div>
        <div class="col-lg-1 border">TEST</div>
    </div>

    <div style="margin-top: 20px; border-top: solid">Trying with a flex grid now</div>

    <div class="flex-row border">
        <div class="flex-col border break-col-1">
            Hi
        </div>
        <div style="width: 100%"></div>
        <div class="flex-col border break-col-1">
            Here's a longer entry for the column
        </div>
        <div class="flex-col border break-col-1">
            Medium Length
        </div>
        <div class="flex-col border break-col-1 ">
            And this is a great deal of text that I expect may not wrap if I don't change anything.
        </div>
    </div>







<style>

    .border {
        border-width: 2px !important;
        border-style: solid;
    }

    .flex-col{
        display: flex;
        flex-direction: column;
    }

    .flex-row{
        display: flex;
        flex-direction: row;
    }


    @media (max-width:400px){
        .break-col-1 {
            width: 100%;
            background-color: red;
        }
    }







</style>
