import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../services/config.service";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, public configService: ConfigService) {
  }

  ngOnInit(): void {
  }

  getTrustedSrc(src: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  getIcon(text: string): any {
    let fileName = "default.png";
    text = text.toLowerCase();
    this.fileList.forEach(element => {
      if (element.includes(text)) {
        fileName = element;
      }
    });
    return "assets/icons/" + fileName;
  }

  fileList: Array<string> = [
    "act.png",
    "actual.png",
    "adguard-home.png",
    "adminer.png",
    "adsbexchange.png",
    "airsonic.png",
    "airtel.png",
    "alarmpi.png",
    "albertheijn.png",
    "alertmanager.png",
    "algovpn.png",
    "alltube.png",
    "almalinux.png",
    "alpine-linux.png",
    "amazon.png",
    "amcrest.png",
    "amd.png",
    "amp.png",
    "ampache.png",
    "amvd.png",
    "anonaddy.png",
    "ansible.png",
    "apache-druid.png",
    "apache.png",
    "apc.png",
    "apprise.png",
    "archisteamfarm.png",
    "archivebox.png",
    "archiveteamwarrior.png",
    "archlinux.png",
    "argocd.png",
    "ariang.png",
    "arris.png",
    "artifactory.png",
    "asana.png",
    "asrockrackipmi.png",
    "assetgrid.png",
    "asterisk.png",
    "asus-light.png",
    "asus-rog.png",
    "asus-router.png",
    "asus.png",
    "audiobookshelf.png",
    "authelia.png",
    "authentik-orange.png",
    "authentik.png",
    "autobrr.png",
    "avmfritzbox.png",
    "aws-ecs.png",
    "aws.png",
    "awx.png",
    "axis.png",
    "azuracast.png",
    "azure-container-service.png",
    "azure.png",
    "azuredns.png",
    "babybuddy.png",
    "backblaze.png",
    "bacula.png",
    "badge.png",
    "baikal.png",
    "baserow.png",
    "basilisk.png",
    "bastillion.png",
    "bazarr.png",
    "beats.png",
    "beets.png",
    "betanin.png",
    "bible-gateway.png",
    "bibliogram.png",
    "biedronka.png",
    "bing.png",
    "birdnet.png",
    "bitcoin.png",
    "bithumen.png",
    "bitwarden.png",
    "blocky.png",
    "blue-iris.png",
    "bluewallet.png",
    "bobcat-miner.png",
    "booksonic.png",
    "bookstack.png",
    "box.png",
    "brave-dev.png",
    "brave.png",
    "brewpi.png",
    "brillcam.png",
    "brocade.png",
    "brother.png",
    "browserless.png",
    "browsh.png",
    "btcpay-server.png",
    "buddy.png",
    "budget-zero.png",
    "buffalo.png",
    "buxfer.png",
    "c.png",
    "cabot.png",
    "cacti.png",
    "caddy.png",
    "cadvisor.png",
    "calibre.png",
    "calibreweb.png",
    "cardigann-light.png",
    "cardigann.png",
    "carrefour.png",
    "castopod.png",
    "centos.png",
    "ceph.png",
    "changedetection-io-alt.png",
    "changedetection-io.png",
    "changedetectionio.png",
    "checkmk.png",
    "cherry.png",
    "chevereto.png",
    "chowdown.png",
    "chrome-dev.png",
    "chrome-devtools.png",
    "chrome.png",
    "chromium.png",
    "chronograf.png",
    "cinny.png",
    "cisco.png",
    "clash.png",
    "clashX.png",
    "cloud66.png",
    "cloud9.png",
    "cloudbeaver.png",
    "cloudcmd.png",
    "cloudflare-zero-trust.png",
    "cloudflare.png",
    "cockpit.png",
    "cockpitcms.png",
    "code.png",
    "codeserver-light.png",
    "codeserver.png",
    "codestats-light.png",
    "codestats.png",
    "codimd.png",
    "commafeed.png",
    "concourse-light.png",
    "concourse.png",
    "contabo.png",
    "coredns.png",
    "coreos.png",
    "costco.png",
    "couchpotato.png",
    "cozy-cloud.png",
    "cpanel.png",
    "cpp.png",
    "crater-invoice.png",
    "crazydomains.png",
    "cross-seed-square.png",
    "cross-seed.png",
    "crowdsec.png",
    "cryptpad.png",
    "csharp.png",
    "css.png",
    "cups-light.png",
    "cups.png",
    "cura.png",
    "cyberchef.png",
    "d-link-wifi.png",
    "d-link.png",
    "dahua.png",
    "dart.png",
    "dashdot.png",
    "dashy.png",
    "datadog.png",
    "dc-os.png",
    "dd-wrt-light.png",
    "dd-wrt.png",
    "ddns-updater.png",
    "debian.png",
    "deemix.png",
    "deluge.png",
    "deno.png",
    "devtooly.png",
    "dietpi.png",
    "dillinger.png",
    "directus.png",
    "discord.png",
    "discourse.png",
    "diskover.png",
    "dnla.png",
    "docker-compose.png",
    "docker-gc.png",
    "docker-mailserver.png",
    "docker.png",
    "dockstarter.png",
    "docspell.png",
    "dogpile.png",
    "dokuwiki.png",
    "dolibarr.png",
    "domainmod.png",
    "domoticz.png",
    "doubletake.png",
    "dozzle.png",
    "draw.png",
    "draytek.png",
    "drone-blue.png",
    "drone.png",
    "droneblue.png",
    "droppy.png",
    "duckdns.png",
    "duckduckgo.png",
    "duplicacy.png",
    "duplicati.png",
    "ebay.png",
    "edge-dev.png",
    "edge.png",
    "edgeos-light.png",
    "edgeos.png",
    "elastic.png",
    "elasticsearch.png",
    "electron.png",
    "element.png",
    "emby.png",
    "embystat.png",
    "emq-light.png",
    "emq.png",
    "emqx.png",
    "emulatorjs.png",
    "epson-iprint.png",
    "ersatztv.png",
    "erste-george.png",
    "erste.png",
    "esphome.png",
    "etherpad.png",
    "evebox.png",
    "facebook-messenger.png",
    "facebook.png",
    "falconplayer.png",
    "fedora-alt.png",
    "fedora.png",
    "ferdi.png",
    "ferdium.png",
    "fermentrack.png",
    "filebot.png",
    "filebrowser.png",
    "fileflows.png",
    "filelist.txt",
    "filepizza.png",
    "filerun.png",
    "files.png",
    "filezilla.png",
    "fios.png",
    "firefly.png",
    "firefox-beta.png",
    "firefox-developer-edition.png",
    "firefox-lite.png",
    "firefox-nightly.png",
    "firefox-reality.png",
    "firefox.png",
    "firefoxsend.png",
    "fireshare.png",
    "firewalla.png",
    "flame.png",
    "fleet.png",
    "flexget.png",
    "flightradar24.png",
    "flogo.png",
    "flood.png",
    "fluffychat.png",
    "fluidd.png",
    "focalboard.png",
    "foldingathome.png",
    "fontawesome.png",
    "foscam.png",
    "foundry-vtt.png",
    "franz.png",
    "freedombox.png",
    "freeipa.png",
    "freenas-light.png",
    "freenas.png",
    "freenom.png",
    "freepbx.png",
    "freshrss.png",
    "frigate-light.png",
    "frigate.png",
    "fronius.png",
    "funkwhale.png",
    "gameyfin.png",
    "gaps.png",
    "gatus.png",
    "geckoview.png",
    "gentoo.png",
    "ghost.png",
    "ghostfolio.png",
    "gitea.png",
    "github-light.png",
    "github.png",
    "gitlab.png",
    "gladys-assistant.png",
    "glances.png",
    "glpi.png",
    "gmail.png",
    "go.png",
    "goaccess.png",
    "gogs.png",
    "golang.png",
    "google-calendar.png",
    "google-chat.png",
    "google-cloud-platform.png",
    "google-container-engine.png",
    "google-drive.png",
    "google-fonts.png",
    "google-gmail.png",
    "google-home.png",
    "google-keep.png",
    "google-mail.png",
    "google-maps.png",
    "google-meet.png",
    "google-photos.png",
    "google-remote-desktop.png",
    "google-v2.png",
    "google-wide.png",
    "google.png",
    "gotify.png",
    "grafana.png",
    "grav.png",
    "graylog-red.png",
    "graylog.png",
    "grist.png",
    "grocy.png",
    "guacamole.png",
    "hammond.png",
    "handbrake.png",
    "haproxy.png",
    "harbor.png",
    "hard-forum.png",
    "harvester.png",
    "hasura.png",
    "hatsh.png",
    "hdhomerun.png",
    "headphones.png",
    "healthchecks.png",
    "heimdall-light.png",
    "heimdall.png",
    "helium-token.png",
    "hexo.png",
    "hikvision.png",
    "homarr.png",
    "home-assistant-circle.png",
    "home-assistant.png",
    "homebox.png",
    "homebridge.png",
    "homepage.png",
    "homer.png",
    "homeseer.png",
    "honeygain.png",
    "hoppscotch.png",
    "hp.png",
    "html.png",
    "huawei.png",
    "hubitat.png",
    "huginn.png",
    "hugo.png",
    "humhub.png",
    "hydra.png",
    "hyperion.png",
    "icecast.png",
    "icinga.png",
    "idrac.png",
    "ihatemoney.png",
    "ilo.png",
    "immich.png",
    "influxdb.png",
    "infoblox.png",
    "instagram.png",
    "invidious.png",
    "invoiceninja.png",
    "iobroker.png",
    "ipboard.png",
    "ipcamtalk.png",
    "irc.png",
    "iredmail.png",
    "ispconfig.png",
    "ispy.png",
    "jackett.png",
    "jaeger.png",
    "java.png",
    "javascript.png",
    "jdownloader.png",
    "jeedom.png",
    "jellyfin-vue.png",
    "jellyfin.png",
    "jellyseerr.png",
    "jelu.png",
    "jenkins.png",
    "jio.png",
    "jira.png",
    "jitsi.png",
    "jitsimeet.png",
    "joomla.png",
    "joplin.png",
    "julia.png",
    "jupyter.png",
    "kaizoku.png",
    "kamatera.png",
    "kanboard.png",
    "kapacitor.png",
    "kasm-workspaces.png",
    "kasm.png",
    "kaufland.png",
    "kavita.png",
    "keila.png",
    "kerberos.png",
    "keycloak.png",
    "kibana.png",
    "kimai.png",
    "kinto.png",
    "kitana.png",
    "kitchenowl.png",
    "kiwix-light.png",
    "kiwix.png",
    "ko-fi.png",
    "kodi.png",
    "koillection.png",
    "komga.png",
    "kopia.png",
    "kotlin.png",
    "krusader.png",
    "kubernetes-dashboard.png",
    "kutt.png",
    "lanraragi.png",
    "lazylibrarian.png",
    "leanote.png",
    "leantime.png",
    "lemonldapng.png",
    "letsencrypt.png",
    "libreddit.png",
    "librenms.png",
    "librephotos-light.png",
    "librephotos.png",
    "librespeed.png",
    "librex.png",
    "lidarr.png",
    "lidl.png",
    "lightning-terminal.png",
    "lighttpd.png",
    "linkace.png",
    "linkding.png",
    "linksys.png",
    "linode.png",
    "linux-mint.png",
    "listmonk.png",
    "lnbits.png",
    "logitech-gaming.png",
    "logitech-legacy.png",
    "logitech.png",
    "logstash.png",
    "loki.png",
    "longhorn.png",
    "lua.png",
    "lychee.png",
    "mailcow.png",
    "mailcowsogo.png",
    "mailhog.png",
    "mailinabox.png",
    "mailu.png",
    "mainsail.png",
    "mak.png",
    "manjaro.png",
    "mantisbt.png",
    "marginalia.png",
    "mariadb.png",
    "mastodon.png",
    "matomo.png",
    "matrix-light.png",
    "matrix-synapse-light.png",
    "matrix-synapse.png",
    "matrix.png",
    "mattermost.png",
    "mayanedms.png",
    "mcmyadmin.png",
    "mealie.png",
    "mediathekview.png",
    "mediawiki.png",
    "medusa.png",
    "mega-nz.png",
    "memos.png",
    "mempool.png",
    "meraki.png",
    "mercusys.png",
    "meshcentral.png",
    "metabase.png",
    "metube.png",
    "microbin.png",
    "microsoft-365.png",
    "microsoft-todo.png",
    "mikrotik.png",
    "minecraft.png",
    "mineos.png",
    "miniflux.png",
    "minio.png",
    "mobaxterm.png",
    "mobotix.png",
    "mojeek.png",
    "molecule.png",
    "mongodb.png",
    "monica.png",
    "monit.png",
    "moodle.png",
    "motioneye.png",
    "mpm.png",
    "mqtt.png",
    "mstream.png",
    "musicbrainz.png",
    "mylar.png",
    "mysql.png",
    "n8n.png",
    "nagios.png",
    "navidrome.png",
    "ncore.png",
    "neko.png",
    "neocities.png",
    "nessus.png",
    "netapp.png",
    "netatmo.png",
    "netboot.png",
    "netbootxyz.png",
    "netbox.png",
    "netcam-studio.png",
    "netdata.png",
    "netgear.png",
    "netlify.png",
    "netmaker-light.png",
    "netmaker.png",
    "network-weathermap.png",
    "newsblur.png",
    "nextcloud-calendar.png",
    "nextcloud-cookbook.png",
    "nextcloud-deck.png",
    "nextcloud-news.png",
    "nextcloud-notes.png",
    "nextcloud-photos.png",
    "nextcloud-talk.png",
    "nextcloud-timemanager.png",
    "nextcloud.png",
    "nextdns.png",
    "nginx.png",
    "nginxproxymanager.png",
    "nitter.png",
    "nocodb.png",
    "node.js.png",
    "nodejs-alt.png",
    "nodered.png",
    "nomad.png",
    "notifiarr.png",
    "nowshowing.png",
    "ntfy.png",
    "ntop.png",
    "nxfilter.png",
    "nxlog.png",
    "nzbget.png",
    "nzbhydra.png",
    "obico.png",
    "obitalk.png",
    "observium.png",
    "obsidian-dark.png",
    "obsidian-light.png",
    "obsidian.png",
    "octoeverywhere.png",
    "octoprint.png",
    "olivetin.png",
    "omada.png",
    "ombi.png",
    "omnidb.png",
    "onedev.png",
    "onlyoffice.png",
    "openeats.png",
    "openhab.png",
    "openmaptiler.png",
    "openmediavault.png",
    "opensearch.png",
    "openspeedtest.png",
    "opensprinkler.png",
    "openstreetmap.png",
    "opensuse.png",
    "openvpn.png",
    "openwrt.png",
    "opera-developer.png",
    "opera-gx.png",
    "opera-touch.png",
    "opera.png",
    "opnsense.png",
    "oracle-cloud.png",
    "organizr.png",
    "oscarr.png",
    "osticket.png",
    "outline.png",
    "overclockers.png",
    "overseerr.png",
    "ovh.png",
    "ovirt.png",
    "owncloud.png",
    "ownphotos-light.png",
    "ownphotos.png",
    "pagerduty.png",
    "pale-moon.png",
    "paloaltonetworks.png",
    "paperless-ng.png",
    "paperless.png",
    "papermerge.png",
    "partkeepr.png",
    "pastatool.png",
    "pastey.png",
    "peertube.png",
    "petio.png",
    "pfsense.png",
    "pgadmin.png",
    "phantombot.png",
    "photonix.png",
    "photoprism.png",
    "photostructure.png",
    "photoview.png",
    "php.png",
    "phpipam.png",
    "phpldapadmin.png",
    "phpmyadmin.png",
    "pi-alert-dark.png",
    "pi-alert.png",
    "piaware.png",
    "pihole-unbound.png",
    "pihole.png",
    "pikvm-light.png",
    "pikvm.png",
    "pingdom.png",
    "pivpn.png",
    "piwigo.png",
    "pixelfed.png",
    "planka.png",
    "plausible.png",
    "pleroma.png",
    "plesk-light.png",
    "plesk.png",
    "plex-new-transparent.png",
    "plex-new.png",
    "plex-square.png",
    "plex.png",
    "plexdrive.png",
    "plexrequests.png",
    "plume.png",
    "podify.png",
    "poly.png",
    "polycom-alt.png",
    "polycom.png",
    "polywork.png",
    "portainer-v2.png",
    "portainer.png",
    "portus.png",
    "poste.png",
    "postgres.png",
    "powerdns.png",
    "powerpanel.png",
    "premium-mobile-v1.png",
    "premium-mobile-v2.png",
    "premium-mobile.png",
    "printer.png",
    "pritunl.png",
    "privacyidea.png",
    "private-internet-access.png",
    "privatebin.png",
    "projectsend.png",
    "prometheus.png",
    "prowlarr.png",
    "proxmox.png",
    "prtg.png",
    "psitransfer.png",
    "pterodactyl.png",
    "pufferpanel.png",
    "pushfish.png",
    "pushover.png",
    "putty.png",
    "pwndrop.png",
    "pwpush.png",
    "pydio.png",
    "pyload.png",
    "python.png",
    "qbittorrent.png",
    "qinglong.png",
    "qnap.png",
    "quant-ux.png",
    "r.png",
    "rabbitmq.png",
    "radarr.png",
    "radicale.png",
    "rainloop-light.png",
    "rainloop.png",
    "rancher.png",
    "raneto.png",
    "raritan.png",
    "raspberrymatic.png",
    "raspberrypi.png",
    "rathole.png",
    "rclone.png",
    "rdt-client.png",
    "readarr.png",
    "readthedocs.png",
    "real-debrid.png",
    "recalbox.png",
    "recipesage.png",
    "reddit.png",
    "redis.png",
    "remotely.png",
    "requestrr.png",
    "resiliosync.png",
    "rhasspy-light.png",
    "rhasspy.png",
    "rhodecode.png",
    "riot.png",
    "rocketchat.png",
    "rocky-linux.png",
    "rompya.png",
    "rook.png",
    "roundcube.png",
    "router.png",
    "rpi-monitor.png",
    "rport.png",
    "rspamd.png",
    "rss-bridge.png",
    "rsshub.png",
    "rstudioserver.png",
    "ruby.png",
    "rundeck.png",
    "runeaudio.png",
    "runonflux-mark-blue.png",
    "runonflux.png",
    "rust.png",
    "rustdesk.png",
    "rutorrent.png",
    "sabnzbd-text.png",
    "sabnzbd.png",
    "safari-ios.png",
    "sagemcom.png",
    "samsung-internet.png",
    "sandstorm.png",
    "scrutiny.png",
    "scrypted.png",
    "seafile.png",
    "searxmetasearchengine.png",
    "searxng.png",
    "security-onion.png",
    "selfhosted.png",
    "sendinblue.png",
    "sensu-green.png",
    "sensu-logo.png",
    "servarr.png",
    "serviio.png",
    "shaarli.png",
    "shell.png",
    "shellngn.png",
    "shelly.png",
    "shinobi.png",
    "shiori.png",
    "shlink.png",
    "shoko.png",
    "sickbeard.png",
    "sickchill.png",
    "sickgear.png",
    "simplelogin.png",
    "sinusbot.png",
    "siyuan.png",
    "skylink-fibernet.png",
    "skype.png",
    "slack.png",
    "smokeping.png",
    "snapdrop.png",
    "snibox.png",
    "snipe-it-alt.png",
    "snipe-it.png",
    "snippetbox.png",
    "sogo.png",
    "solid-invoice.png",
    "sonarqube.png",
    "sonarr.png",
    "soulseek.png",
    "sourcegraph.png",
    "spamassassin.png",
    "sparkleshare.png",
    "specter-desktop.png",
    "speedtest-tracker.png",
    "sphinx-doc.png",
    "sphinx-relay.png",
    "splunk.png",
    "spotify.png",
    "spotweb.png",
    "sqlitebrowser.png",
    "squidex.png",
    "sshswifty.png",
    "startpage.png",
    "stash.png",
    "statping.png",
    "storj.png",
    "strapi.png",
    "streama.png",
    "supermicro.png",
    "swift.png",
    "swizzin.png",
    "symmetricom.png",
    "sympa.png",
    "syncany.png",
    "synclounge.png",
    "syncthing.png",
    "synology-audio-station.png",
    "synology-calendar.png",
    "synology-chat.png",
    "synology-contacts.png",
    "synology-download-station.png",
    "synology-drive-app.png",
    "synology-drive.png",
    "synology-dsm.png",
    "synology-filestation.png",
    "synology-note-station.png",
    "synology-photo-station.png",
    "synology-photos.png",
    "synology-surveillance-station.png",
    "synology-video-station.png",
    "synology.png",
    "taiga.png",
    "tailscale.png",
    "tandoorrecipes.png",
    "tanoshi.png",
    "tar1090.png",
    "taskcafe.png",
    "tasmoadmin.png",
    "tasmota-light.png",
    "tasmota.png",
    "tautulli.png",
    "tdarr.png",
    "technitium.png",
    "teedy.png",
    "telegraf.png",
    "telegram.png",
    "teleport.png",
    "tenda.png",
    "terraform.png",
    "teslamate.png",
    "thanos.png",
    "theia-light.png",
    "theia.png",
    "thelounge.png",
    "thunderhub.png",
    "timemachines-light.png",
    "timemachines.png",
    "timetagger.png",
    "tinytinyrss.png",
    "todoist.png",
    "tooljet.png",
    "tplink.png",
    "traccar.png",
    "traefik.png",
    "trakt.png",
    "transmission.png",
    "trilium.png",
    "truenas-enterprise.png",
    "truenas-scale.png",
    "truenas.png",
    "truenascore.png",
    "tube-archivist.png",
    "tubesync.png",
    "tux.png",
    "tvheadend.png",
    "tvp-vod.png",
    "twitch.png",
    "twitter.png",
    "typescript.png",
    "typo3.png",
    "ubooquity.png",
    "ubuntu-alt.png",
    "ubuntu.png",
    "uc.png",
    "udemy-learning.png",
    "ultimateguitar.png",
    "umbrel.png",
    "unami-light.png",
    "unami.png",
    "unifi-controller.png",
    "unifi-protect.png",
    "unifi.png",
    "unificontroller.png",
    "uninterruptible-power-supply.png",
    "universal-media-server-light.png",
    "universal-media-server.png",
    "unmanic.png",
    "unraid.png",
    "untangle.png",
    "updog.png",
    "upsnap.png",
    "uptime-kuma.png",
    "urbackup.png",
    "valetudo.png",
    "vault-light.png",
    "vault.png",
    "vaultwarden.png",
    "veeam.png",
    "verizon.png",
    "vi.png",
    "vikunja.png",
    "virtualmin.png",
    "virtualradarserver.png",
    "vmware.png",
    "vmwareesxi.png",
    "vmwarehorizon.png",
    "vmwarevcenter.png",
    "voip-info.png",
    "voip-ms.png",
    "volumio.png",
    "voron.png",
    "vscode.png",
    "vultr.png",
    "vuplus.png",
    "wakapi.png",
    "wallabag.png",
    "wanikani.png",
    "ward.png",
    "watcher.png",
    "watchtower.png",
    "watchyourlan.png",
    "wazuh.png",
    "wbo.png",
    "webdav.png",
    "webhook.png",
    "webhookd.png",
    "webkit.png",
    "webmin.png",
    "webtools.png",
    "webtop.png",
    "webtorrent.png",
    "wekan.png",
    "wetty.png",
    "wger.png",
    "wggenweb.png",
    "whatsapp.png",
    "whisparr.png",
    "whooglesearch.png",
    "wikijs.png",
    "windows-11.png",
    "windows-7.png",
    "windows-95.png",
    "windows-98.png",
    "windows-admin-center.jpg",
    "windows-vista.png",
    "windows-xp.png",
    "wireguard.png",
    "wled.png",
    "woodpecker-ci.png",
    "wordpress.png",
    "workadventure.png",
    "xbackbone.png",
    "xcp-ng.png",
    "xen-orchestra.png",
    "xenorchestra.png",
    "xigmanas.png",
    "xmrig.png",
    "xteve.png",
    "xwiki.png",
    "yacht.png",
    "yahoo-mail.png",
    "yahoo.png",
    "yandex.png",
    "ymarks.png",
    "ynab.png",
    "yourls.png",
    "youtube-light.png",
    "youtube-play.png",
    "youtube.png",
    "youtubedl.png",
    "yunohost.png",
    "zabbix-v2.png",
    "zabbix.png",
    "zabka.png",
    "zammad.png",
    "zendesk.png",
    "zerotier.png",
    "zigbee2mqtt.png",
    "znc.png",
    "zohomail.png",
    "zoneminder.png",
    "zulip.png",
    "zwavejs2mqtt.png"
  ];
}
