# reaction-payment-skeleton
Reaction Commerce Payment Skeleton

You can use this code as a base tu add a custom payment method to **Reaction Commerce** ([Add payment docs](https://docs.reactioncommerce.com/docs/how-to-create-a-payment-provider)).

You have 3 options to install this plugin in reaction commerce api.

### From npm:

```npm install @weknow/reaction-payment-skeleton --save```

### From github:

```npm install git+ssh://git@github.com:weknowinc/reaction-payment-skeleton.git --save```

### From file directory:

```
// Go to reaction api project folder.
cd reaction
// Create a directory to hold your local plugins.
mkdir api-plugin
cd api-plugin
// Clone the repo.
git clone git@github.com:weknowinc/reaction-payment-skeleton.git
// return to project folder.
cd ..
// install the package from the file system.
npm install ./api-plugin/reaction-payment-skeleton --save
```

This should be your prefered method to use this code as a base for your custom payment method.

## Install the plugin:

To install the plugin you need to edit ```plugins.json``` that it's in the root directory of the reaction project and add the reference to the installed package.

```
{
 ...
 "addressValidationTest": "@reactioncommerce/api-plugin-address-validation-test",
 "reactionPaymentSkeleton": "@weknow/reaction-payment-skeleton"
}

```
Restart the reaction api project and the plugin should be installed.

For the storefront component we have [reaction-payment-skeleton](https://github.com/weknowinc/reaction-payment-skeleton) that you can use if you are using the reaction [example-storefront](https://github.com/reactioncommerce/example-storefront/) project.
