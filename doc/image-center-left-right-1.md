---
path: /doc/image-center
date: 2020-04-10T04:47:52.036Z
title: Image Center/ Left/ Right
---
1. Create New Project:

```
gatsby new netlifycms-gatsby https://github.com/developerjahid/my-gatsby
```

2. Install Netlify CMS and the Gatsby plugin:<!--StartFragment-->

```
npm i netlify-cms-app@2.11.20 gatsby-plugin-netlify-cms@4.1.40
```

In `gatsby-config.js`, register the Netlify CMS plugin:

```
module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`],
}
```

3. Then create a `static/admin `directory and a `config.yml `file in it.

   <!--StartFragment-->

   .static/admin/config.yml

   <!--EndFragment-->

<!--StartFragment-->

```
backend:
  name: test-repo
  
media_folder: static/assets
public_folder: assets
  
collections:
  - name: blog
    label: Blog
    folder: blog
    create: true
    fields:
      - { name: path, label: Path }
      - { name: date, label: Date, widget: datetime }
      - { name: title, label: Title }
      - { name: body, label: Body, widget: markdown 
```

<!--EndFragment-->

4. Create New Project:
5. Create New Project:
6. Create New Project:
7. Create New Project:
