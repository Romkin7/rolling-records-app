<script setup lang="ts">
import Link from "@/components/Link/Link.vue";
const year = ref(new Date().getFullYear());

interface PaymentMethod {
  src: string;
  alt: string;
}
const paymentMethods: PaymentMethod[] = [
  {
    src: "/images/paytrail.png",
    alt: "Paytrail",
  },
  {
    src: "/images/paypal.png",
    alt: "PayPal",
  },
  {
    src: "/images/cash.png",
    alt: "Cash",
  },
];
</script>

<template>
  <v-footer :elevation="2" padless class="footer">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <Heading variant="title3" color="dark" tag="h3"
            >Pienet Levykaupat Oy</Heading
          >
          <Heading variant="title4" color="dark" tag="h4"
            >Markkinointinimi: Rolling Records</Heading
          >
          <Paragraph variant="body" color="dark">Y-tunnus: 3575369-4</Paragraph>
          <Heading variant="title4" color="dark" tag="h4">Verkkokauppa</Heading>
          <Paragraph variant="body" color="dark">
            Rolling Records
            <Link color="dark" variant="inline" to="/customer-service"
              >Asiakaspalvelu</Link
            >
          </Paragraph>
          <Paragraph variant="body" color="dark">
            Käyttämällä sivustoamme, hyväksytte meidän verkkokaupan
            <Link color="dark" variant="inline" to="/terms-of-service"
              >käyttöehdot</Link
            >,
            <Link color="dark" variant="inline" to="/privacy-policy"
              >tietosuojakäytäntömme</Link
            >
            ja käyttämämme
            <Link color="dark" variant="inline" to="/cookies-policy"
              >evästeet</Link
            >.
          </Paragraph>
        </v-col>
        <v-col class="text-center">
          <Heading variant="title3" color="dark" tag="h3">Maksutavat</Heading>
          <v-container>
            <v-row justify="center" align="center" dense>
              <v-col
                cols="4"
                class="text-center"
                v-for="method in paymentMethods"
                :key="method.alt"
              >
                <v-img
                  :src="method.src"
                  :alt="method.alt"
                  contain
                  max-height="40"
                />
              </v-col>
            </v-row>
            <v-row justify="center" align="center" dense>
              <v-col cols="12" class="text-center">
                <Paragraph variant="body" color="dark">
                  Käytämme verkkokaupan maksupalveluna
                  <ExternalLink
                    variant="inline"
                    color="medium"
                    href="https://www.paytrail.com/kuluttaja/tietoa-maksamisesta"
                    >Paytrailia</ExternalLink
                  >,
                  <ExternalLink
                    variant="inline"
                    color="medium"
                    href="https://www.paypal.com/"
                    >PayPalia</ExternalLink
                  >
                  ja <strong>käteismaksua myymälässämme</strong> turvallisten
                  maksujen takaamiseksi.
                </Paragraph>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col class="text-center">
          <Heading variant="title3" color="dark" tag="h3">Yhteystiedot</Heading>
          <Paragraph variant="body" color="dark">
            Sähköposti:
            <ExternalLink
              color="dark"
              variant="standalone"
              href="mailto:rollingrecords.fin@gmail.com"
              >rollingrecords.fin@gmail.com</ExternalLink
            >
          </Paragraph>
          <h4>Myymälä</h4>
          <Paragraph variant="body" color="dark">
            Osoite: Vaasanpolku 6, Liikehuoneisto 6, 00500 Helsinki
          </Paragraph>
          <Paragraph variant="body" color="dark">
            Puhelin:
            <ExternalLink
              color="dark"
              variant="standalone"
              href="tel:+358503445539"
              >+358 50 344 55 39</ExternalLink
            >
          </Paragraph>
          <Heading variant="title4" color="dark" tag="h4">Aukioloajat</Heading>
          <Paragraph variant="body" color="dark">Su-Ma: Suljettu</Paragraph>
          <Paragraph variant="body" color="dark">Ti-Pe: 11-18</Paragraph>
          <Paragraph variant="body" color="dark">La: 11-16</Paragraph>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <Paragraph variant="body" color="dark">
            &copy; {{ year }} Pienet Levykaupat Oy / Rolling Records. Kaikki
            oikeudet pidätetään.
          </Paragraph>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <Paragraph variant="body" color="dark">
            Made with ❤ by
            <ExternalLink
              variant="inline"
              color="medium"
              href="https://devdesign.fi"
              >DevDesign</ExternalLink
            >
          </Paragraph>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer {
  background-color: var(--rr-color-brand-tertiary);
}

.footer h3,
.footer h4 {
  color: var(--rr-color-text-dark);
}

.footer h3 {
  margin-bottom: var(--rr-size-dimension-spacing-5);
}

.footer h4 {
  margin-bottom: var(--rr-size-dimension-spacing-3);
}

.footer p {
  margin-bottom: var(--rr-size-dimension-spacing-2);
}
</style>
