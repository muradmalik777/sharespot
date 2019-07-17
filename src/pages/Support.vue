<template>
    <div>
        <div class="bg-white">
            <v-container class="support">
                <v-layout row wrap class="spacing">
                    <v-flex xs12 sm12 md12 lg12 mb-4>
                        <h1 class="heading">Support</h1>
                    </v-flex>
                    <v-flex xs12 sm7 md7 lg7>
                        <p>ShareSpot enables businesses to release spare desks, warehouse space and 
                            meeting rooms to likeminded businesses increasing the income for the host 
                            businesses and providing reduced costs and maximum flexibility to sharers. 
                            Book a desk for short or long term, book a meeting room by the hour - or even some warehouse space.</p>
                    </v-flex>
                    <v-flex xs12 sm1 md1 lg1>
                        
                    </v-flex>
                    <v-flex xs12 sm2 md2 lg2>
                        <h5>Phone</h5>
                        <p>07700 900381</p>
                    </v-flex>
                    <v-flex xs12 sm2 md2 lg2>
                        <h5>Email</h5>
                        <p><a class="mail" href="mailto:support@sharespot.mt">support@ShareSpot.mt</a></p>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <div class="bg-grey">
            <v-container class="faq">
                <v-layout row wrap class="data spacing">
                    <v-flex xs12 sm12 md12 lg12 mb-4>
                        <h1 class="heading">Frequently asked Questions</h1>
                    </v-flex>
                    <v-flex xs12 sm12 md12 lg12>
                        <v-tabs v-model="active" slider-color="#20d696">
                            <v-tab href="#general" ripple>General</v-tab>
                            <v-tab href="#booker" ripple>Booker</v-tab>
                            <v-tab href="#host" ripple>Host</v-tab>

                            <v-tab-item value="general">
                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>How do I purchase an item?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity,
                                         color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. 
                                        If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>This listing looks suspicious, what should I do?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the 
                                        item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in 
                                        filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>When I attempt to purchase an item, I get a PayPal error. What’s going on?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of 
                                        authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for
                                         a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in 
                                         filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>I bought an item, but the seller is not responding.</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the 
                                        item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend 
                                        reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the 
                                        seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>I purchased a fake item, how do I get my money back?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>I received an item I purchased and it did not come as described, how do I get a refund?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>What if there is an issue with the transaction? (Seller does not ship item, item is damaged, etc.)</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-tab-item>

                            <v-tab-item value="booker">
                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>How do I purchase an item?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity,
                                         color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. 
                                        If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>This listing looks suspicious, what should I do?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the 
                                        item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in 
                                        filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>When I attempt to purchase an item, I get a PayPal error. What’s going on?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of 
                                        authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for
                                         a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in 
                                         filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>I bought an item, but the seller is not responding.</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the 
                                        item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend 
                                        reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the 
                                        seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>I purchased a fake item, how do I get my money back?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>I received an item I purchased and it did not come as described, how do I get a refund?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>What if there is an issue with the transaction? (Seller does not ship item, item is damaged, etc.)</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-tab-item>

                            <v-tab-item value="host">
                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>How do I purchase an item?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity,
                                         color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. 
                                        If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>This listing looks suspicious, what should I do?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the 
                                        item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in 
                                        filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>When I attempt to purchase an item, I get a PayPal error. What’s going on?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of 
                                        authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for
                                         a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in 
                                         filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>I bought an item, but the seller is not responding.</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the 
                                        item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend 
                                        reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the 
                                        seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>I purchased a fake item, how do I get my money back?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>I received an item I purchased and it did not come as described, how do I get a refund?</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                    <template v-slot:header>
                                        <h5>What if there is an issue with the transaction? (Seller does not ship item, item is damaged, etc.)</h5>
                                    </template>
                                    <p>If you buy something on Grailed and the description does not accurately describe the item in terms of authenticity, color, condition, fabric and/or measurement, then we recommend reaching out to the seller for a mutually satisfactory resolution. If you are unable to work it out with the seller, we can assist you in filing a PayPal claim to securely receive a portion or all of your money back.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-tab-item>
                        </v-tabs>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>
<script>
export default {
  name: "Support",
  data: function() {
    return {
        active: "general"
    };
  }
};
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";

.support {
  max-width: 1300px;
  .heading {
    font-size: 42px;
  }
  .mail{ color: $dark-green; }
}
.faq {
  max-width: 1300px;
  background: $form-side;
    .heading {
        font-size: 42px;
    }
    .v-tabs{
        .v-tabs__bar{
            background: transparent;
        }
        .v-tabs__div{
            width: 120px;
            a{
                text-align: center;
                padding: .5rem 0;
                font-size: 22px;
                font-weight: 600;
                color: $text-dark;
                text-transform: capitalize;
            }
        }
        .v-tabs__slider{
            width: 100px;
            margin: auto;
        }
        .v-window{
            padding: 2rem 0;
        }
    }
    .v-expansion-panel{
        background: $form-side;
        box-shadow: none;
        .v-expansion-panel__container{
            background: transparent;
            .v-expansion-panel__header{
                padding: 1rem 0;
            }
            .v-icon{
                display: none;
            }
        }
    }
}
</style>
