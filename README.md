# LWC boilerplate

The most barebone LWC setup for simple experiments and bug reproductions.

```sh
$ npm run build             # Build app
$ npm run build -- --watch  # Build app in watch mode
$ npm serve                 # Serve local files 
```

Description of the bug:

1- run the application as explained above.  
The page should be showing 3 products

2- refresh the page clicking the refresh button.  
The code fail with an error in the console:  

```
main.js:8014 Uncaught (in promise) DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
    at HTMLBridgeElement.insertBefore (http://localhost:3000/dist/main.js:8014:39)
    at insert (http://localhost:3000/dist/main.js:7652:10)
    at insertNode (http://localhost:3000/dist/main.js:4520:3)
    at mountCustomElement (http://localhost:3000/dist/main.js:4360:3)
    at mount (http://localhost:3000/dist/main.js:4267:7)
    at updateDynamicChildren (http://localhost:3000/dist/main.js:4830:9)
    at patchChildren (http://localhost:3000/dist/main.js:4194:5)
    at http://localhost:3000/dist/main.js:6430:9
    at runWithBoundaryProtection (http://localhost:3000/dist/main.js:6740:5)
    at patchShadowRoot (http://localhost:3000/dist/main.js:6423:7)
```  


In this particular example the page seems OK to the end user, though in a real use case in DXP the page is screwed up as the node are not removed and the repeated items are duplicated:  

```
bundle_webruntime_app.js:1277 [webruntime] router level error 
error:  DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    at HTMLBridgeElement.removeChild (http://localhost:3000/1/bundle/amd/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_11_3/s/d14e6e8d6ad62b9537cbca8d80916705ea9dcec8/bundle_lwc.js:8666:39)
    at remove (http://localhost:3000/1/bundle/amd/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_11_3/s/d14e6e8d6ad62b9537cbca8d80916705ea9dcec8/bundle_lwc.js:8271:12)
    at resetComponentRoot (http://localhost:3000/1/bundle/amd/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_11_3/s/d14e6e8d6ad62b9537cbca8d80916705ea9dcec8/bundle_lwc.js:7201:9)
    at runWithBoundaryProtection (http://localhost:3000/1/bundle/amd/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_11_3/s/d14e6e8d6ad62b9537cbca8d80916705ea9dcec8/bundle_lwc.js:7255:9)
    at patchShadowRoot (http://localhost:3000/1/bundle/amd/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_11_3/s/d14e6e8d6ad62b9537cbca8d80916705ea9dcec8/bundle_lwc.js:6924:9)
    at rehydrate (http://localhost:3000/1/bundle/amd/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_11_3/s/d14e6e8d6ad62b9537cbca8d80916705ea9dcec8/bundle_lwc.js:6908:7)
    at rerenderVM (http://localhost:3000/1/bundle/amd/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_11_3/s/d14e6e8d6ad62b9537cbca8d80916705ea9dcec8/bundle_lwc.js:6644:5)
    at patchCustomElement (http://localhost:3000/1/bundle/amd/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_11_3/s/d14e6e8d6ad62b9537cbca8d80916705ea9dcec8/bundle_lwc.js:4804:7)
    at patch (http://localhost:3000/1/bundle/amd/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_11_3/s/d14e6e8d6ad62b9537cbca8d80916705ea9dcec8/bundle_lwc.js:4646:9)
    at updateStaticChildren (http://localhost:3000/1/bundle/amd/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_11_3/s/d14e6e8d6ad62b9537cbca8d80916705ea9dcec8/bundle_lwc.js:5317:13) 
wcstack:
 <webruntime-app>
	<webruntime-router-container>
	<b2c_lite_commerce-product-data-provider>
	<commerce-product-test-variant-repeater>
```  
